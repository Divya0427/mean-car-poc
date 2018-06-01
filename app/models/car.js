var mongoose = require('mongoose');

module.exports = mongoose.model('Car', {
	name: {
		type: String,
		default: ''
	},
	models: {
		type: Array,
		default: ''
	}
});
