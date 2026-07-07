const express = require("express");
const cors = require("cors");

const { connectDB } = require("./database/connection");

const dealerRoutes = require("./routes/dealers");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", dealerRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Dealership Review Express Server is running"
    });
});

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});