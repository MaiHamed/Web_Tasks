const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const courseRoutes = require("./routes/courseRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/courses", courseRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));