import {Router} from "express"
import { signup, signin, getUsers, logout } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', signup);
router.post('/login', signin);
router.post('/users', getUsers);
router.post('/logout', logout);

export default router
