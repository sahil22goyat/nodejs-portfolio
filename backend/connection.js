const mongoose = require("mongoose");

async function Mongodb(p){mongoose.connect(p,{

  useNewUrlParser: true,

  useUnifiedTopology: true,
})
  .then(()=>{
  console.log("connected to mongodb")
})
.catch((err)=>{
  console.log("mongodb not connected");
})};
module.exports=Mongodb;