const express = require("express");
const port = 1004

const app = express();
const path = require("path");

const db = require("./config/db");
const schema = require("./model/firstSchema")

app.set("view engine", "ejs");
app.use(express.urlencoded())
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => { 
    let data = await schema.find({});
    res.render("index", { data });
});

// app.get("/",(req,res) => {
//     res.render("index", {books})
// });

// app.post("/addData", async (req, res) => {
//     await schema.create(req.body)
//     .then((data)=>{
//         res.redirect("/")
//     })
//     // let data = await schema.create(req.body);
//     // data && res.redirect("/");
// });



// let books = [
//     { id: "1", name: "Rich DaD", author: "Robert Kiyosaki", price: "50₹", releasedDate: "1997", image:""},
//     { id: "2", name: "The 5 AM Club", author: "Robin Sharma", price: "40₹", releasedDate: "2018", image: "https://m.media-amazon.com/images/I/71Jg6kSgYwL._SY466_.jpg"},
//     { id: "3", name: "The Alchemist", author: "Paulo Coelho", price: "45₹", releasedDate: "1988", image: "https://m.media-amazon.com/images/I/61HAE8zahLL._SL1331_.jpg"},
//     { id: "4", name: "How to Win Friends and Influence People", author: "Dale Carnegie", price: "50₹", releasedDate: "1936", image: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SL1500_.jpg"},
//     { id: "5", name: "The Intelligent Investor", author: "Benjamin Graham", price: "60₹", releasedDate: "1949", image: "https://m.media-amazon.com/images/I/91L0La1pwDL._SL1500_.jpg"}
// ]


app.post("/addData",async (req,res) =>{
    // console.log(req.body)
    // req.body.id = String(books.length + 1)
    // books.push(req.body)
    // res.redirect("/")
    await schema.create(req.body)
    data && res.redirect("/")

})


app.get("/editData", async(req,res) => {
    let data = await schema.findById(req.query.id)
    res.render("edit", {data});
});

app.post("/updateData", async(req, res) => {
    console.log(req.body.id)
    await schema.findByIdAndUpdate(req.body.id, req.body)
    .then((data) => {
        res.redirect("/")
    })
})

app.get("/deleteData", async(req, res) => {
    await schema.findByIdAndDelete(req.query.id)
    .then((data) => {
        res.redirect("/")
    })
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port " + port);
});