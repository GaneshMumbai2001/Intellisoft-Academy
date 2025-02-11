// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())



// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(8000,()=>{
//     console.log("port connected");
// })

// server.jsx
const express = require("express");
const collection = require("./mongo"); // Your MongoDB connection module
const cors = require("cors");
const bcrypt = require('bcrypt'); // For password hashing
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ... (Your MongoDB connection code in ./mongo.js)

app.get("/", cors(), (req, res) => {
    res.send("Server is running"); // Helpful for testing
});

app.post("/", async (req, res) => { // Login route
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            // Compare the entered password with the stored hash
            const passwordMatch = await bcrypt.compare(password, check.password);

            if (passwordMatch) {
                res.json("exist"); // Successful login
            } else {
                res.status(401).json({ message: "Invalid password" }); // 401 Unauthorized
            }
        } else {
            res.status(404).json({ message: "Email not found" }); // 404 Not Found
        }
    } catch (e) {
        console.error("Login error:", e);
        res.status(500).json({ message: "Internal server error" }); // 500 Internal Server Error
    }
});

app.post("/signup", async (req, res) => { // Signup route
    const { email, password } = req.body;

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.status(409).json({ message: "Email already exists" }); // 409 Conflict
        } else {
            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            const data = {
                email: email,
                password: hashedPassword,
            };

            await collection.insertMany([data]);
            res.status(201).json({ message: "User created successfully" }); // 201 Created
        }
    } catch (e) {
        console.error("Signup error:", e);
        res.status(500).json({ message: "Internal server error" }); // 500 Internal Server Error
    }
});

app.listen(8000, () => {
    console.log("Port connected");
});