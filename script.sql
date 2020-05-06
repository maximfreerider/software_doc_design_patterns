create table account(
    id SERIAL PRIMARY key,
    username varchar not null,
    name varchar not null,
    surname varchar not null,
    email varchar not null,
    city varchar not null,
    country varchar not null,
    money integer not null,
    number_of_card varchar not null
);