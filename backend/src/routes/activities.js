const {Router} = require('express')
const router = Router()

const {getActivities, createActivity, getActivity, updateActivity, deleteActivity} = require('../controllers/activities.controller.js')

router.route('/')
.get(getActivities)
.post(createActivity)

router.route('/:id')
.get(getActivity)
.put(updateActivity)
.delete(deleteActivity)

module.exports = router