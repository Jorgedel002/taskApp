import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    dateEndTask: {
        type: Date,
        require: true
    }
},{
    timestamps: true
})

export default mongoose.model('Task', TaskSchema)