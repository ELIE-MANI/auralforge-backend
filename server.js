const express =  require("express");
const cors =  require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Auralforge Backend Running"})
});
app.post("/generate-lyrics", (req,res) => {
    const{ prompt } = req.body;

    console.log('Received prompt:', prompt);
    if(!prompt){
    return res.status(400).json({ error: "Prompt is required"});
}
const fakeLyrics= `This song is about ${prompt}...`;
res.json({lyrics: fakeLyrics});
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});