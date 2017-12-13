console.log('Starting notes.js')

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title: title,
    body: body
  };

  var notesString = fs.readFileSync(notes-data.json);
  notes = JSON.parse(notesString); // parse into array

  notes.push(note); // push note into notes array
  // write stringified notes to json file
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var getAll = () => {
  console.log('Getting All Notes');
};

var getNote = (title) => {
  console.log('Getting Note', title)
};

var removeNote = (title) => {
  console.log('Remove Note', title);
};

module.exports = {
  addNote: addNote, // refers to addNote function above
  getAll: getAll,
  removeNote
};
