const express = require("express")

const app = express();

const userRoute = require("./Route/userRoute")

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://obasanyajanet1:form123@cluster0.ntnojk1.mongodb.net/")

const db = mongoose.connection
db.on("error", err => console.log(err))
db.once("open", () => console.log("Connected to Database SUCCESSFULLY!!!"))


app.use(express.json())
app.use("/api", userRoute)

app.listen(7171, console.log('Server Started'))


