const activitiesCtrl={}

const Activity = require('../models/Activity')

activitiesCtrl.getActivities = async (req,res)=>{
    const activities = await Activity.find()
    res.json(activities)
}

activitiesCtrl.createActivity= async (req,res)=>{
    const {title,description,time,startDay,priority,days} = req.body
    const newActivity = new Activity ({
        title,
        description,
        time,
        startDay,
        priority,
        days
    })
    await newActivity.save()
    res.json({message:'Activity Saved'})
}

activitiesCtrl.getActivity = async (req,res)=> {
    const activity = await Activity.findById(req.params.id)
    res.json(activity)
}

activitiesCtrl.updateActivity = async (req,res)=> {
    const{title,description,time,startDay,priority,days}=req.body
    await Activity.findOneAndUpdate(req.params.id,{
        title,
        description,
        time,
        startDay,
        priority,
        days
    })
res.json({message:'Activity Updated'})
}

activitiesCtrl.deleteActivity = async (req,res)=> {
    await Activity.findByIdAndDelete(req.params.id)
    res.json({message:'Activity Deleted'})
}

module.exports = activitiesCtrl