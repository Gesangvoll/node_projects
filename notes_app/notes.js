const fs = require('fs')
const getNotes = function(){
    return 'Your notes...'
}

const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    }) 
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New notes added!')
    } else {
        console.log('Note title taken!')
    }
    
}

const loadNotes = function() {
    try {
        dataBuffer = fs.readFileSync('notes.json')
        notesJSON = dataBuffer.toString()
        notes = JSON.parse(notesJSON)
        return notes
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes) {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}