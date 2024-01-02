import {Router} from "express"
import { signup, signin, getUsers, logout, verifyToken } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', signup);
router.post('/login', signin);
router.post('/users', getUsers);
router.post('/logout', logout);
router.post('/verify', verifyToken)

export default router
