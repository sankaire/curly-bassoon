const express = require("express");
const cors = require("cors");
const app = express();

const sendAirtimeRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/", sendAirtimeRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
