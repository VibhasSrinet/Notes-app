const chalk = require('chalk')
const { log } = require('console')
const fs=  require('fs')
const { title } = require('process')

const getNotes= ()=>{
    return 'Your Notes...'
}

const addNote= (title, body)=>{
    const notes= loadNotes()
    const duplicate= notes.find((note)=> note.title===title )

    debugger
    if(!duplicate){
    notes.push({
        title: title , 
        body : body 
    })
    saveNotes(notes)
    console.log(chalk.bold.bgGreen('New Note added with title ', title, ' added'))
}
else{
    console.log(chalk.bold.bgRed('Note with title ',title, ' already taken'))
}
}

const saveNotes=(notes)=>{
    const dbnotes= JSON.stringify(notes)
  fs.writeFileSync('Notes.json', dbnotes)
}

const removeNote= (title)=>{
    const notes = loadNotes()
    const duplicate= notes.filter((note)=>note.title!=title)
    if(duplicate.length!==notes.length)
    {
        saveNotes(duplicate)
        console.log(chalk.bold.bgGreen('Note with title ',title,' is removed'))
    }
    else{
     console.log(chalk.bold.bgRed('No match for your request ', title))
    }
}

const listNotes= ()=>{
    const notes= loadNotes()
    console.log(chalk.blue.bold.bgWhite('Notes :'))
    notes.forEach( (note) => {
        console.log(chalk.bold.bgBlue(note.title))
    })
}


const readNote= (title)=>{
  const notes= loadNotes()
  const dubplicate= notes.find((note)=>note.title===title)
  if(dubplicate){
  console.log(chalk.bold.gray.bgWhite(dubplicate.title))
  console.log(chalk.italic.bgGray(dubplicate.body))
  }
  else{
      console.log(chalk.bgRed.bold('Note with title ', title, ' not available'))
  }
}


const loadNotes= ()=>{

    try{
     const bffer=fs.readFileSync('Notes.json')
     const bts=bffer.toString()
     const notes= JSON.parse(bts)
     return notes
    }
    catch(e){
      return []
    }
    
   
}


module.exports=  {
  getNotes: getNotes, 
  addNote : addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}

