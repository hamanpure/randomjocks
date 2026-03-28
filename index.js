import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

//Create an express app and set the port number.
const app = express();
const port = 3000;
//Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", async (req, res) => {
    res.render("index.ejs")
});

app.post("/", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode");
        //console.log(result)
        res.render("index.ejs", {
            joke : result.data,
            name : req.body.name
        })
    } catch (error) {
         console.log(error.response.data);
    res.status(500);
    }
});
//Listen on your predefined port and start the server.
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});