import express from 'express'
import { getAdmins, getUserPerformance } from "../controllers/management.js"

const app = express()

app.get('/admins', getAdmins)
app.get('/performance/:id', getUserPerformance)

export default app