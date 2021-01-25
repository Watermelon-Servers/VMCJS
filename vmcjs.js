const express = require("express");
const app = express();
const cors = require("cors");
const sanitizer = require("sanitize")();
const formidable = require('express-formidable');
app.use(cors());
app.use(require('sanitize').middleware);
app.use(formidable());

const port = process.env.PORT || 4765

var hypervisor = require("./routes/hypervisor");

app.use("/hypervisor", hypervisor);

app.listen(port, () => {
    console.log(`VMCJS is listening on port ${port}`)
});

app.get("/", (req, res) => {
    res.send(`VMCJS - Watermelon API`)
})