const express = require('express');
const app = express();


//get, post, delete, put, patch, all(sobgulai bujay)

//app.get(), app.post(), app.delete(), app.put(), app.patch(), app.all()


// route/path , calback ----- (ei 2 ta method er vitore take) (route/path e hit hole callback ta execute hobe)


// app.all("*", (req, res)=>{                          // ekane * mane anything jekono kichu dile r app.all() mane jekono method
//     console.log("==========", req.method);
//     res.send(`<h1>Hello from express</h1>`);
// })




// app.all("/", (req, res)=>{
//     console.log("==========", req.method);
//     res.send(`<h1>Hello from express</h1>`);
// })


app.get("/getreq", (req, res)=>{
    console.log("==========", req.method);
    res.send(`<h1>Hello form get</h1>`)
})

app.post("/postreq", (req, res)=>{
    console.log("==========", req.method);
    res.send(`<h1>Hello form post</h1>`)
})

app.put("/putreq", (req, res)=>{
    console.log("==========", req.method);
    res.send(`<h1>Hello form put</h1>`)
})

app.patch("/patchreq", (req, res)=>{
    console.log("==========", req.method);
    res.send(`<h1>Hello form path</h1>`)
})








app.listen(8000, ()=>{
    console.log("Server is Running at port 8000")
})
