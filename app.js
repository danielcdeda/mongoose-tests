//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
const mongoose = require('mongoose');
 
//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
  }

  
//create a SCHEMA that sets out the fields each document will have and their datatypes

const fruitSchema = new mongoose.Schema ({
	name: { 
    type: String,
    required: [true, "Please enter a fruit name"]
  },
	rating: {
    type: Number,
    min: 1,
    max: 10
  },
	review: String
})
 
//create a MODEL
const Fruit = new mongoose.model ("Fruit", fruitSchema)
 
//create a DOCUMENT

const fruit = new Fruit ({
	name: "Apple",
	rating: 10,
	review: "Great!"
})
 
//save the document
fruit.save()
 
//**CHALLENGE: Set up a people database with one document and two fields**//
//create a SCHEMA
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
 
//create a MODEL
const Person = mongoose.model('Person', personSchema);
 
//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37
});
 
//Save it
// person.save();

Fruit.find()
    .then(function (fruits) {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    })
    .catch(function (err) {
        console.log(err);
    });