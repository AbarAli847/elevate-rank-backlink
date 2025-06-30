const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// ✅ Allow requests from your frontend
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use('/api/websites', require('./routes/websites')); // new websites route
app.use('/api/payments', require('./routes/payments')); // new websites route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
