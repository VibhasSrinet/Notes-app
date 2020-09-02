
const chalk = require('chalk')
const notes= require('./notes.js')
const yargs= require('yargs')
const { argv } = require('yargs')




yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder : {
       title:{
           describe : 'Note title',
           demandOption: true,
           type: 'string'
       },

       body: {
          describe: 'Note Body',
          demandOption : true,
          type : 'string' 
       }
    }
    ,
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe : 'Removes a note',
    builder : {
        title :
        {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists a note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title : {
         describe : 'Note title', 
         demandOption: true, 
         type : 'string'
        }
    },
    handler(){
        notes.readNote(argv.title)
    }
})
yargs.parse()
