import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoute from './routes/client.js'
import generalRoute from './routes/general.js'
import managementRoute from './routes/management.js'
import salesRoute from './routes/sales.js'


import User from './models/User.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import Transaction from './models/Transaction.js'
import OverallStat from './models/OverallStat.js'
import AffiliateStat from './models/AffiliateStat.js'
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } from './data/index.js'


dotenv.config()
mongoose.set('strictQuery', true)
const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())



app.use('/client', clientRoute)
app.use('/general', generalRoute)
app.use('/management', managementRoute)
app.use('/sales', salesRoute)


const port = process.env.PORT || 3000
mongoose.connect("mongodb://localhost:27017/dashboardDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected")
    app.listen(port, () => {
        console.log(`Server Port: ${port}`)
    })

    /* Insert only once */
    // User.insertMany(dataUser)
    //Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverallStat.insertMany(dataOverallStat)
    // AffiliateStat.insertMany(dataAffiliateStat)
})
    .catch((err) => console.log(`${err} did not connect`))


