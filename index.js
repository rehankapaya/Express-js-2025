const express = require('express')
const app = express()



// HTTPS METHODS

// 1 GET - WILL USE TO GET DATA - app.get()
// 2 POST - CREATE DATA - app.post()
// 3 PUT - UPDATE DATA - app.put()
// 4 DELETE - DATA DELETE - app.delete()

// 5 USE - to call middleware - app.use()
// 6 LISTEN  - TO DEFINE PORT - app.listen() 


let users = [
    {
        id:1,
        name:"Tahir"
    },
    {
        id:2,
        name:"Ali"
    },
    {
        id:3,
        name:"Kamran"
    },
    {
        id:4,
        name:"Raza"
    },
]


// app.method('/',(req,res)=>{})

app.get('/', (req, res) => {
    res.send("Hello Express")
})


app.get('/api/users',(req,res)=>{
    res.send(users)
})

app.listen(3000,()=>{
    console.log(`server is running`)
})
