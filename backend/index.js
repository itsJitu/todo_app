const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv/config");


const app = express();
app.use(cors());

const PortNo = process.env.PORT_NO || 8080;
const MONGOOSE_URL = process.env.MONGOOSE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOption = {
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD", "OPTIONS"]
}

app.use(express.json());
app.use(cors(corsOption));


// Connect to MongoDB
mongoose
.connect(MONGOOSE_URL)
.then(() => {
    console.log("db connected");
})

.catch((error) => {
    console.log(error);

})
// Routes
 const addTask = require("./routes/todo.routes");
   app.use("/api/todo", addTask);

app.listen(PortNo, () => console.log(`server is up & running at ${PortNo}`));
