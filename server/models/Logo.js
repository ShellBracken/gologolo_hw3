var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  color: String,
  fontSize: { type: Number, default: 12, min: 2, max: 144 },
  backgroundColor: { type: String, default: "#E39B45" }, 
  borderColor: { type: String, default: "#F08080" }, 
  borderRadius: { type: Number, default: 10, min: 5, max: 20 }, 
  borderWidth: { type: Number, default: 2 , min: 2, max: 5 }, 
  padding: { type: Number, min: 2, max: 30 }, 
  margin: { type: Number, min: 2, max: 30 },
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);