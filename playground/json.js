// var obj = {
//   name: 'John',
//   age: 46
// };

// var stringObj = JSON.stringify(obj); // takes object and converts to a string

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "John", "age": 46}';
// // personString.name does not exist because personString is a string

// var person = JSON.parse(personString);
// // converts JSON string original form which could be an array or object

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some Title',
  body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote); // convert oject to JSON string
fs.writeFileSync('notes.json', originalNoteString); // (file name, content to write)

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString) // convert back into an object
console.log(typeof note);
console.log(note.title)

