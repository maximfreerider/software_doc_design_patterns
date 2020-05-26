const express = require("express");
const Axios =  require("axios");
const PrintService = require("../service/log.service.js")
const {getPrintStrategy} = require('../utils.js')

const router = express.Router();

router.get("/event-hub", async (req, res) => {
  try {
    const fileResponse = await Axios.get(
      "https://data.cityofnewyork.us/resource/ipu4-2q9a.json"
    );

    const printStrategy = getPrintStrategy();
    const printService = new PrintService(printStrategy);
    const printedLines = await printService.print(fileResponse.data);

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
