const express = require("express");
const { connection } = require("./db");
const { UserModel } = require("./models/user.model");
const cors = require("cors");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());


app.post("/signup", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.json({ msg: "User Signedup.", user });
  } catch (error) {}
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server up and running at ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
