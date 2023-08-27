const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        //console.log(dataBuffer)
        const dataJson = dataBuffer.toString()
        //console.log(dataJson)
        const data = JSON.parse(dataJson)
        //console.log(data)
        return data
    }
    catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json", notesJson)
}

const getNotes = () => {
    return "Your notes..."
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    //const dup = notes.filter((n) => n.title === title)
    const dup = notes.find((n) => n.title === title)

    //debugger
    
    if (!dup) {
        const note = {
            title: title,
            body: body
        }
        notes.push(note)
        saveNotes(notes)
        console.log(chalk.green("Note added!!"))
    }
    else {
        console.log(chalk.red("Note title already taken!!"))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const removed = notes.filter((n) => n.title !== title)
    if (removed.length == notes.length) {
        console.log(chalk.red("Note not there!!"))
    }
    else {
        saveNotes(removed)
        console.log(chalk.green("Note removed successfully!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.bgBlue("Your Notes: "))
    let i = 0
    notes.forEach(element => {
        console.log(chalk.bgWhite.black(`${++i} .`), chalk.yellow(`Title:`) + chalk.cyan(element.title) + chalk.yellow(`, Body: `) + chalk.cyan(element.body));
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((n)=>n.title===title)
    if(note){
        console.log(chalk.italic.magenta.inverse(note.title))
        console.log(chalk.cyan(note.body))
    }
    else{
        console.log(chalk.red("Note not found"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}