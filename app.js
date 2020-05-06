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


// insert into account (username, name, surname, email, city, country, money, number_of_card)
//               values('user1', 'user1', 'user1', 'user1@gmail.com', 'lviv', 'ukraine', 12531, 1236547889632547)