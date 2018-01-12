console.log('Starting app.js');

// run in command line - node app.js add --title=secret --body="Some body here"

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0]; // First item in array
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    console.log('--');
    console.log(`Note Title: ${note.title}`);
    console.log(`Note Body: ${note.body}`);
  } else {
    console.log("Note title already exist!");
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized!');
}
