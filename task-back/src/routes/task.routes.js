import {Router} from "express"
import { createTask, deleteTask, updateTask,  getTasks, getTask } from "../controllers/task.controller.js"

const router = Router();

router.post('/createTask', createTask);
router.post('/tasks', getTasks);
router.post('/task/:id', getTask);
router.post('/deleteTask/:id', deleteTask);
router.put('/updateTask/:id', updateTask);

export default router;