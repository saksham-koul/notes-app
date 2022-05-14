const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)        //array.find returns the first matching value, otherwise undefined
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note successfully added!'))
    }
    else console.log(chalk.red.inverse('A note with same title exists!'))
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('Note not found!'))
    }
    else console.log(chalk.green.inverse('Note ' + `"${title}"` +' successfully removed!'))
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (!noteToRead) console.log(chalk.red.inverse('Note not found!'))
    else{
        console.log(chalk.green.bold(noteToRead.title) + ': ' + noteToRead.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}