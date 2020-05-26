const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes/index.js');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}`)
});
