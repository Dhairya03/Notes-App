const yargs = require('yargs')
const notes = require('./notes.js')

//add , remove, read, list
//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       // console.log('Adding a new note',argv);
        notes.addNotes(argv.title,argv.body);
        // console.log('Title:',argv.title);
        // console.log('Body:',argv.body);
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       // console.log('Removing a new note',argv);
        notes.removeNotes(argv.title)
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('Reading a note',argv);
        notes.readNotes(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'List of notes',
    handler(argv){
       // console.log('Listing notes',argv);
        notes.listNotes()
    }
})

yargs.parse()
//console.log(yargs.argv)