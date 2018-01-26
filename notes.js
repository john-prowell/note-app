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
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes returning only the one with matching title
  var filteredNotes = notes.filter((note) => note.title === title); // filter note with matching title in search
  return filteredNotes[0]; // filter returns an array so we return the first note in that array
};

var removeNote = (title) => {
  // fetch notes
  var notes = fetchNotes();
  // filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => { // will populate filteredNotes with all the titles that do not match the title that is passed in, if it does match then it will not be added in to filtered notes because of our filter function.
    return note.title !== title; // title that is passed in to function
  });
  // save new notes array
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length; // check if note was removed by comparing before and after arrays
};

var logNote = (note) => {
  // Break on this line and use repl to output note
  debugger;
  // Use read command with --title
  console.log('--');
  console.log(`Note Title: ${note.title}`);
  console.log(`Note Body: ${note.body}`);  
};

module.exports = {
  addNote: addNote, // refers to addNote function above
  getAll: getAll,
  removeNote: removeNote,
  getNote: getNote,
  logNote: logNote
};
