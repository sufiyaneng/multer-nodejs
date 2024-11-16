import express from 'express'
import { createTodo } from './Controller/user.controller.js'
import { uploadTodo } from './utils/Multer.js'
const router = express.Router()

router.post("/create",uploadTodo,createTodo)

export default router

