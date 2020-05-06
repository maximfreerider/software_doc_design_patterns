const Sequelize = require("sequelize");

// const db = new Sequelize('postgres://postgres:root@localhost:5432/lab2');
module.exports = new Sequelize('lab2', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost'
});


// insert into account (username, name, surname, email, city, country, money, number_of_card)
//               values('user1', 'user1', 'user1', 'user1@gmail.com', 'lviv', 'ukraine', 12531, 1236547889632547)

// create table account(
//     id SERIAL PRIMARY key,
//     username varchar not null,
//     name varchar not null,
//     surname varchar not null,
//     email varchar not null,
//     city varchar not null,
//     country varchar not null,
//     money integer not null,
//     number_of_card varchar not null
// );

// ALTER TABLE accounts
// ADD createdAt date;