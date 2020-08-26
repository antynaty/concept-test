const mongoose = require('mongoose');


const planetSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  rotation_period: { type: String, required: true },
  orbital_period: { type: String, required: true },
  diameter: { type: String, required: true },
  climate: { type: String, required: true },
  gravity: { type: String, required: true },
  terrain: { type: String, required: true },
  surface_water: { type: String, required: true },
  population: { type: String, required: false },
  residents: { type: Array, require: false },
  films: { type: Array, required: false },
  created: { type: Date, required: true },
  edited: { type: Date, required: true },
  url: { type: String, required: false },
});

module.exports = mongoose.model('Planet', planetSchema)

