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
        name:"Tahir",
        age:22,
        contact:"03128883838"
    },
    {
        id:2,
        name:"Ali",
        age:21
    },
    {
        id:3,
        name:"Kamran",
        age:21
    },
    {
        id:4,
        name:"Raza",
        age:22
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
