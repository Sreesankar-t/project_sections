import express from "express"; 
import { register } from "../Controllers/userController.js";
const router = express.Router()

router.post("/register",register)

export default router