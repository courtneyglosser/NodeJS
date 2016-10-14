// index.js



var mongoose = require ('mongoose')
var Cat = require ('./cats')
var CatFactory = require ('./cats-factory')


mongoose.connect('mongodb://localhost/test')

var kittie = new Cat(CatFactory.validCat)

kittie.save(function (error, saved, numRows) {

    if (error) {
        console.log('Error saving kittie: ', error)
    }
    else {
        console.log("Saved record: ", saved)
        console.log("Num Rows Effected: ", numRows)
    }

    process.exit()
})


var failCat = new Cat(CatFactory.invalidCat)

failCat.save (function (error, saved, numRows) {

    if (error) {
        console.log('Error saving failCat: ', error)
    }
    else {
        console.log("Saved record: ", saved)
        console.log("Num Rows Effected: ", numRows)
    }

    process.exit()
})

