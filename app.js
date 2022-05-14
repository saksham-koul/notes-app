const chalk = require('chalk');
const yargs = require('yargs');
const notesUtils = require('./notes.js');
// const {removeNote} = require("./notes");

yargs.command({
    command: 'add',
    describe: 'Command to add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Body of the note',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notesUtils.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Command to remove a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notesUtils.removeNote(argv.title)
    }
});
yargs.command({
    command: 'list',
    describe: 'Command to list out all the notes',
    handler() {
        notesUtils.listNotes()
    }
});
yargs.command({
    command: 'read',
    describe: 'Command to read a note',
    builder: {
        title: {
            describe: 'Title of the note to be read',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notesUtils.readNote(argv.title)
    }
});

yargs.parse();          //reads the (argv) that yargs has produced