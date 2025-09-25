const express = require('express')
const ConnectDB = require('./config/db')
const ProductModel = require('./models/ProductSchema')
const app = express()
require('dotenv').config()

app.use(express.json())
ConnectDB()
// HTTPS METHODS

// 1 GET - WILL USE TO GET DATA - app.get()
// 2 POST - CREATE DATA - app.post()
// 3 PUT - UPDATE DATA - app.put()
// 4 DELETE - DATA DELETE - app.delete()

// 5 USE - to call middleware - app.use()
// 6 LISTEN  - TO DEFINE PORT - app.listen() 


let users = [
    {
        id: 1,
        name: "Tahir",
        age: 22,
        contact: "03128883838"
    },
    {
        id: 2,
        name: "Ali",
        age: 21
    },
    {
        id: 3,
        name: "Kamran",
        age: 21
    },
    {
        id: 4,
        name: "Raza",
        age: 22
    },
]


// app.method('/',(req,res)=>{})

app.get('/', (req, res) => {
    res.send("Hello Express")
})

app.get('/api/users', (req, res) => {
    res.send(users)
})


// api to create product

app.post('/api/product', async (req, res) => {
    console.log(req.body)
    let newProduct = req.body
    try {
        let product = await ProductModel.create(newProduct)
        res.json({
            message: "Product Create Successfully",
            product
        })

    } catch (error) {
        res.json({
            message: "Failed to create Product",
            error
        })
    }

})



app.get('/api/product', async (req, res) => {
    try {
        let products = await ProductModel.find()
        res.json({
            message: "Products Fetched Successfully",
            products
        })

    } catch (error) {

        res.json({
            message: "Failed to Fetch",
            error
        })
    }
})


app.get('/api/product/:id', async (req, res) => {
    let { id } = req.params
    try {
        let product = await ProductModel.findById(id)
        console.log(product)
        res.json({
            message: "Product Fetched",
            product
        })
    } catch (error) {
        res.json({
            message: "Failed to Fetch Product",
            error
        })
    }
    res.send(req.params.id)
})




















let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`)
})
