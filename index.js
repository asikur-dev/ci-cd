require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello from your VPSs!"));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🟢 Listening on ${PORT}`));
