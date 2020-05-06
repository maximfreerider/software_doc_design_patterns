const fs = require("fs");
const path = require("path");

const FILE_NAME = "file_data1.csv";
const FILE_PATH = path.join("./files/", FILE_NAME);
const LINE_NUMBER = 1000;

const COMA = ",";
const DEFAULT_VALUES = {
  NAMES: [
    "Name1",
    "Name2",
    "Name3",
    "Name4",
    "Name5",
    "Name6",
    "Name7",
    "Name8",
    "Name9",
    "Name10",
    "Name11",
    "Name12",
    "Name13",
    "Name14",
    "Name15",
    "Name16",
    "Name17",
    "Name18",
    "Name19",
    "Name20",
    "Name21",
    "Name22",
    "Name23",
    "Name24",
    "Name25",
    "Name26",
    "Name27",
    "Name28",
    "Name29",
    "Name30",
  ],
  SURNAMES: [
    "Surname1",
    "Surname2",
    "Surname3",
    "Surname4",
    "Surname5",
    "Surname6",
    "Surname7",
    "Surname8",
    "Surname9",
    "Surname10",
    "Surname11",
    "Surname12",
    "Surname13",
    "Surname14",
    "Surname15",
    "Surname16",
    "Surname17",
    "Surname18",
    "Surname19",
    "Surname20",
    "Surname21",
    "Surname22",
    "Surname23",
    "Surname24",
    "Surname25",
    "Surname26",
    "Surname27",
    "Surname28",
    "Surname29",
    "Surname30",
  ],
  USERNAMES: [
    "Username1",
    "Username2",
    "Username3",
    "Username4",
    "Username5",
    "Username6",
    "Username7",
    "Username8",
    "Username9",
    "Username10",
    "Username11",
    "Username12",
    "Username13",
    "Username14",
    "Username15",
    "Username16",
    "Username17",
    "Username18",
    "Username19",
    "Username20",
    "Username21",
    "Username22",
    "Username23",
    "Username24",
    "Username25",
    "Username26",
    "Username27",
    "Username28",
    "Username29",
    "Username30",
  ],
  EMAILS: [
    "user1@gmail.com",
    "user2@gmail.com",
    "user3@gmail.com",
    "user4@gmail.com",
    "user5@gmail.com",
    "user6@gmail.com",
    "user7@gmail.com",
    "user8@gmail.com",
    "user9@gmail.com",
    "user10@gmail.com",
    "user11@gmail.com",
    "user12@gmail.com",
    "user13@gmail.com",
    "user14@gmail.com",
    "user15@gmail.com",
    "user16@gmail.com",
    "user17@gmail.com",
    "user18@gmail.com",
    "user19@gmail.com",
    "user20@gmail.com",
    "user21@gmail.com",
    "user22@gmail.com",
    "user23@gmail.com",
    "user24@gmail.com",
    "user25@gmail.com",
    "user26@gmail.com",
    "user27@gmail.com",
    "user28@gmail.com",
    "user29@gmail.com",
    "user30@gmail.com",
  ],
  CITY: [
    'Lviv',
    'Berlin',
    'NY',
    'Lublin',
    'Berlin',
  ],
  COUNTRY: [
    'Ukraine',
    'Poland',
    'USA',
    'Germany',
    'Hungary',
  ]
};

const generateRandNuberOfCard = () => {
  return Math.floor(Math.random() * 10000000000000000).toString();
};

const generateRandMoney = () => {
  return Math.floor(Math.random() * 10000);
};

const getItemFromArray = (array, index) => array[index % array.length];

const data = [];
for (let i = 0; i < LINE_NUMBER; i++) {
  const line =
    getItemFromArray(DEFAULT_VALUES.USERNAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.NAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.SURNAMES, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.EMAILS, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.CITY, i) +
    COMA +
    getItemFromArray(DEFAULT_VALUES.COUNTRY, i) +
    COMA +
    generateRandMoney() +
    COMA +
    generateRandNuberOfCard()
  data.push(line);
}

fs.writeFile(FILE_PATH, data.join("\n"), (err) => {
  if (err) throw err;
  console.log(`Your file was created successfully, path to file is: ${FILE_PATH}`);
});