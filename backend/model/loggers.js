const mongoose=require("mongoose");
const loggers =new mongoose.Schema({


firstname:{type: String ,
          require:true},

  lastname:{ type:String },

age:{type: Number ,
require:true},

contact:{ type:Number,
require:true},

email:{type: String ,
           require:true,
       unique:true},

city:{type: String ,
                   require:true},
  password:{type: Number,
                require:true,
         }






  
})
module.exports=mongoose.model('loggers',loggers);