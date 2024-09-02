let express = require("express")
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/movieCast",(req,res)=>{
    let  movieCastArray = ["Saripodha Sanivaram Movie Cast","Nani","Sj Surya","Priyanka Mohan","Saikumar","Ajay Gosh","Murali Sharma","Sudhakar","Jhansi","Abirami"];

    res.json(movieCastArray);
});

// app.post("/movie cast",(req,res)=>{
//     let  movieCastArray = ["Nani","Sj Surya","Priyanka Mohan","Saikumar","Ajay Gosh","Murali Sharma","Sudhakar","Jhansi"];

//     res.json(movieCastArray);
// });
// app.put("/movie cast",(req,res)=>{
//     let  movieCastArray = ["Nani","Sj Surya","Priyanka Mohan","Saikumar","Ajay Gosh","Murali Sharma","Sudhakar","Jhansi"];

//     res.json(movieCastArray);
// });
// app.patch("/movie cast",(req,res)=>{
//     let  movieCastArray = ["Nani","Sj Surya","Priyanka Mohan","Saikumar","Ajay Gosh","Murali Sharma","Sudhakar","Jhansi"];

//     res.json(movieCastArray);
// });
// app.delete("/movie cast",(req,res)=>{
//     let  movieCastArray = ["Nani","Sj Surya","Priyanka Mohan","Saikumar","Ajay Gosh","Murali Sharma","Sudhakar","Jhansi"];

//     res.json(movieCastArray);
// });

app.listen(4567,()=>{
    console.log("Listenting to port 4567");
});