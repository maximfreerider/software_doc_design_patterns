import express from "express";
import Axios from "axios";
import { promisify } from "util";

const RedisClient = require('"../config/redis.js"');
const PrintService = require("../service/log.service");
const { extractFilenameFromUrl, getPrintStrategy } = require("../utils.js");

const router = express.Router();

const LAST_MESSAGE = "LAST_MESSAGE";
const STATUS_COMPLETED = "completed";

const redisHget = RedisClient.hget();
const redisHset = RedisClient.hset();
const redisLpush = RedisClient.lpush();
const redisSet = RedisClient.set();

router.get("/upload", async (req, res, next) => {
  try {
    const fileResponse = await Axios.get(
      "https://data.cityofnewyork.us/resource/ipu4-2q9a.json"
    );

    const uploadDate = new Date().toISOString();
    const filename = extractFilenameFromUrl(fileResponse.request.path);

    const currentStatus = await redisHget(filename, "status");

    if (currentStatus === STATUS_COMPLETED) {
      const lastUploadDate = await redisHget(filename, "uploadDate");

      redisSet(
        LAST_MESSAGE,
        `The file ${filename} has already been uploaded on ${lastUploadDate}`
      );

      return res.sendStatus(208);
    }

    redisHset(filename, "ConsoleLog", uploadDate);
    redisHset(filename, "status", STATUS_COMPLETED);

    // Printing file content
    const printStrategy = getPrintStrategy();
    const printService = new PrintService(printStrategy);
    const printedLines = await printService.print(fileResponse.data);

    // Saving print info to Redis
    printedLines.forEach((line) => redisLpush(`${filename}:info`, line));

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

