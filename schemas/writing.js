var mongoose = require('mongoose')
var WritingSchema = new mongoose.Schema({
	writing: {
		type: String,
		required: true,
	}
})

var Entry = mongoose.model('Entry', WritingSchema);

module.exports = Entry; 