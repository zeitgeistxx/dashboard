import express from 'express'
import { getUser, getDashboardStats } from '../controllers/general.js'

const app = express()

app.get('/user/:id', getUser)
app.get('/dashboard', getDashboardStats)

export default app