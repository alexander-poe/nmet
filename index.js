var ex = require('express').Ex();
var Entry = require('../schemas/writing');





//passport.authenticate('basic', {session: false}),
//gets all entries 
ex.get('/entry/', (req, res) => {
	Entry.find({}, function(err, entries) {
		var entryMap = {};

		entries.forEach(function(entry) {
			entryMap[entry._id] = entry 
		})
		res.send(entryMap);
	})


})

ex.post('/entry/', (req, res) => {
	var entry = new Entry({
		writing: writing
	})
	entry.save().then(function(entry) {
		res.location('/entry/' + entry._id).status(201).json({})
		.catch(function(err) {
			return res.status(500).send({
				message: 'hay, Internal Server derpaderp'
			})
			
		})
	})
})