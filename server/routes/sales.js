import express from 'express'
import { getSales } from '../controllers/sales.js'

const app = express()

app.get('/sales', getSales)

export default app