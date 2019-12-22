const notesCtrl ={}

const Note = require('../models/Note')

notesCtrl.getNotes = async (req,res)=> {
    const notes = await Note.find() //consulta todos los datos en Note de la bd [{},{}]
    res.json(notes)

}

notesCtrl.createNote = async (req,res)=> {
    const {title,content,date,author }= req.body
    const newNote = new Note({
        title: title,
        content:content,
        date:date,
        author:author
    })
    await newNote.save()
    //console.log(newNote)
    res.json({message:'Note Saved'})
}

notesCtrl.getNote = async (req,res)=> {
    const note = await Note.findById(req.params.id)
    res.json(note)
}

notesCtrl.updateNote = async (req,res)=> {
        const{title,content,author}=req.body
        await Note.findOneAndUpdate(req.params.id,{
            title,
            author,
            content,
        })
    res.json({message:'Note Updated'})
}

notesCtrl.deleteNote = async (req,res)=> {
    await Note.findByIdAndDelete(req.params.id)
    res.json({message:'Note Deleted'})
}



module.exports = notesCtrl