const mongoose = require('mongoose');


const charSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required:true},
  height: { type: String, required:true},
  mass: {  type: String, required:true},
  hair_color: { type: String, required: true },
  skin_color: { type: String, required: true },
  eye_color: {type:String, required:true},
  birth_year : {type:String, required:true},
  gender : { type: String, required : true},
  homeworld : { type : String, required : false},
  films: { type: Array, require : false },
  species: { type: Array, required: false}, 
  vehicles: { type: Array, required: false }, 
  starships: { type: Array, required: false}, 
  created: { type: Date, required: true},
  edited: { type: Date, required: true},
  url: { type: String, required: false},
});

module.exports = mongoose.model('Char', charSchema)

