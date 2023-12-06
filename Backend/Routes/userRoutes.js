import express from "express"; 
import { detleData, getData, postData } from "../Controllers/userController.js";
const router = express.Router()

router.post("/postData",postData)
router.get("/getData",getData)
router.put("/deleteData",detleData)

export default router