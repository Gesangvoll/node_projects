const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    
    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title
    // })

    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New notes added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note titled ' + title))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }
}

const listNotes = () => {
    console.log(chalk.inverse("Your notes"))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.blue(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.blue(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("No note titled " + title))
    }    
}

const loadNotes = () => {
    try {
        dataBuffer = fs.readFileSync('notes.json')
        notesJSON = dataBuffer.toString()
        notes = JSON.parse(notesJSON)
        return notes
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}