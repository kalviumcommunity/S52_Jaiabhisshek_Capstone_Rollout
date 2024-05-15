const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);

require("dotenv").config();

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.mongoURI, connectionParams)
    .then(() => console.log("Connected to DB"))
    .catch((err) => {
        console.error("Error connecting to database:", err.message);
        process.exit(1); 
    });

app.get("/", (req, res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
