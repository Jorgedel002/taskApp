import {Router} from "express"
import { createTask } from "../controllers/task.controller"

const router = Router();

router.post('/createTask', createTask);

export default router;