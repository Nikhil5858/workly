const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type: String, required : true},
    description : {type:String, required : true},
    budget : {type:Number, required : true},
    date: {type: Date, default: Date.now},
    deadline : {type: Date, required : true},
    skillsRequired : [String],
    postedBy : {type:mongoose.Schema.Types.ObjectId, ref:'User',required:true},
    status: {type:String, enum:['open','inprogress','completed'],default:'open'},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('project',projectSchema)