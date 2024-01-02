import Task from "../models/task.model.js"


export const createTask = async (req, res) => {
    const {task, description, dateEndTask} = req.body

    try {
        const newTask = new Task({
            task,
            description,
            dateEndTask,
            user: req.user.id
        });

        const newTaskSave = await newTask.save();

        res.json({
            id: newTaskSave.id,
            task: newTaskSave.task,
            description: newTaskSave.description,
            dateEndTask: newTaskSave.dateEndTask
        })
    } catch (error) {
        console.log(error)
    }
}

export const getTasks = async (req,res) => {
    const taskFound = await Task.find({
        user: req.user.id
    }).populate('user');

    try {
        res.json(taskFound);
    } catch (error) {
        console.log(error)
    }
}

export const getTask = async (req,res) => {
    const taskFound = await Task.findById(req.params.id).populate('user');

    try {
        res.json(taskFound);
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(400).json({message: "Task not found"});
    res.json(task)
}

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if(!task) return res.status(400).json({message: "Task not found"});
    res.json(task)
}