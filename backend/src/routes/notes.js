const {Router} = require('express')
const router = Router()

const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controller')


router.route('/')
.get(getNotes)
.post(createNote)
//.post()

router.route('/:id')
.get(getNote)
.put(updateNote)
.delete(deleteNote)

module.exports = router;