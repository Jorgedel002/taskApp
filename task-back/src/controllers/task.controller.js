import Task from "../models/task.model"


export const createTask = async (req, res) => {
    const {task, description, dateEndTask} = req.body

    try {
        const newTask = ({
            task,
            description,
            dateEndTask
        });

        const newTaskSave = newTask.save();

        res.json({
            task: newTaskSave.task,
            description: newTaskSave.description,
            dateEndTask: newTaskSave.dateEndTask
        })
    } catch (error) {
        console.log(error)
    }
} 