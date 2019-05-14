const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')


// Customize version
yargs.version('1.1.1')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //console.log('Title: ' + argv.title) // corresponds to title in builder
        //console.log('Body: ' + argv.body)
        //console.log('Adding a new note!', argv)
        notes.addNotes(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv){
        console.log('Removing a note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes!')
    }
})


yargs.parse()
//console.log(yargs.argv)