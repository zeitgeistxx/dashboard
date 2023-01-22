import express from 'express'
import { getProducts, getCustomers, getTransactions, getGeography } from '../controllers/client.js'

const app = express()

app.get('/products', getProducts)
app.get('/customers', getCustomers)
app.get('/transactions', getTransactions)
app.get('/geography', getGeography)

export default app