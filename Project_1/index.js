const express = require("express")
const port = 1008

const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded())

let books = [
    { id: "1", name: "Rich DaD", author: "Robert Kiyosaki", price: "50₹", releasedDate: "1997", image:"https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg"},
    { id: "2", name: "The 5 AM Club", author: "Robin Sharma", price: "40₹", releasedDate: "2018", image: "https://m.media-amazon.com/images/I/71Jg6kSgYwL._SY466_.jpg"},
    { id: "3", name: "The Alchemist", author: "Paulo Coelho", price: "45₹", releasedDate: "1988", image: "https://m.media-amazon.com/images/I/61HAE8zahLL._SL1331_.jpg"},
    { id: "4", name: "How to Win Friends and Influence People", author: "Dale Carnegie", price: "50₹", releasedDate: "1936", image: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SL1500_.jpg"},
    { id: "5", name: "The Intelligent Investor", author: "Benjamin Graham", price: "60₹", releasedDate: "1949", image: "https://m.media-amazon.com/images/I/91L0La1pwDL._SL1500_.jpg"}
]

app.get("/", (req,res) => {
    res.render("index", {books})
})

app.post("/addData", (req,res) =>{
    console.log(req.body)
    req.body.id = String(books.length + 1)
    books.push(req.body)
    res.redirect("/")
})

app.get("/editData/:id", (req,res) =>{
    let singleData = books.find((item) => item.id == req.params.id)
    res.render("edit", {singleData})
})

app.post("/updateData", (req,res) => {
    
    books.map((e,i) => {
        if(e.id == req.body.id){
            (e.id = req.body.id),
            (e.name = req.body.name),
            (e.author= req.body.author),
            (e.price = req.body.price),
            (e.releasedDate = req.body.releasedDate)
        } else {
            e;
        }
    })

     res.redirect("/")
})

app.get("/deleteData", (req,res) => {
    console.log(req.query)
    let deleteData = books.filter((e) => e.id !== req.query.id)
    books = deleteData
    res.redirect("/")
})

app.listen(port, (err) => {
    err? console.log(err) : console.log("server started on : " + port);
})