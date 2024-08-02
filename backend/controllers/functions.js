
const contacts=require("../model/contacts.js");


const loggers=require("../model/loggers.js");


async  function Getmyachi(req,res){

  res.render("achi");

}



async  function Getmygear(req,res){

  res.render("mygear");

}


async  function Contactfailed(req,res){
 
  res.render("contactfailed");
 
}

async  function Homepage(req,res){
  res.render("homepage");
}
async  function Aboutus(req,res){
  res.render("aboutus");
}
async  function Loginpage(req,res){
  res.render("loginpage");
}
async  function Signuppage(req,res){
  res.render("signuppage");
}
async function Contactsave(req, res) {
  const { firstname, email, contact } = req.body;
  try {
     const data = new contacts({ firstname, email, contact });
   await data.save();
console.log("contact saved")
   
    res.status(200).redirect("/");
  
  }
  catch(err) {

    console.error("Error saving contact:", err);
    res.redirect("/contactfailed");
  }
}

async  function Loggersave(req,res){
const { firstname, lastname, age, contact, email, city, password } = req.body;
  try {
    const data = new loggers({firstname, lastname, age, contact, email, city, password});
   await data.save();
    console.log("logger info saved");
    res.status(200).redirect("/");

  }catch(err){

res.json("enter true details");
     console.error("Error saving contact:", err);
    
  }
}


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function Logout(req, res) {
  
  res.redirect('/login');
}

module.exports={


  Homepage,Aboutus,Loginpage,Signuppage,Contactsave,Contactfailed,Loggersave,Getmygear,Getmyachi,isAuthenticated,Logout
  
}