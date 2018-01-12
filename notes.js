console.log('Starting notes.js')

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString); // parse into array
  } catch (e) {
    return [];
  }  
};

var saveNotes = (notes) => {
  // write stringified notes to json file
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));  
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };  
  // check if duplicate titles
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note); // push note into notes array
    saveNotes(notes);
    return note; // return note that has been added to the function in app.js that called it: notes.addNote
  } else {
    console.log('Duplicate Note Title -- Try again!')
  }
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
