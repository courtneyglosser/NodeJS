// Cats model definition

var mongoose = require ('mongoose')

var catSchema = mongoose.Schema ({
    name: {type: String, required: true}
})

var Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
