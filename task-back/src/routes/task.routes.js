import {Router} from "express"
import { createTask, deleteTask, updateTask,  getTasks, getTask } from "../controllers/task.controller.js"
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post('/createTask',authRequired, createTask);
router.post('/tasks',authRequired, getTasks);
router.post('/task/:id',authRequired, getTask);
router.post('/deleteTask/:id',authRequired, deleteTask);
router.put('/updateTask/:id',authRequired, updateTask);

export default router;