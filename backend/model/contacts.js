const mongoose=require("mongoose");
const contacts =new mongoose.Schema({


  firstname: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true }

})
module.exports = mongoose.model('Contacts', contacts);