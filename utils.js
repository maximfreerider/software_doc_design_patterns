const fs = require("fs");
const readline = require("readline");
const ConsoleStrategy = require("./service/console.eventHub.strategies/ConsoleStrategy");
const EventHubsStrategy = require("./service/console.eventHub.strategies/EventHubsStrategy");

const readLinesFromFile = (startLine, endLine) =>
  new Promise((resolve, reject) => {
    try {
      if (!endLine) {
        endLine = startLine;
        startLine = 0;
      }

      const agents = [];

      const lineReader = readline.createInterface({
        input: fs.createReadStream("./files/file_data1.csv"),
      });

      let i = 0;
      lineReader.on("line", (line) => {
        i++;

        if (i >= startLine) {
          agents.push(line);
        }

        if (i >= endLine) {
          lineReader.removeAllListeners();
          lineReader.close();
          resolve(agents);
        }
      });
    } catch (error) {
      reject(error);
    }
  });

const extractFilenameFromUrl = (string) => {
  return string.substr(string.lastIndexOf("/") + 1);
};

const getPrintStrategy = () => {
  const evnStrategy = process.env.PRINT_STRATEGY;

  switch (evnStrategy) {
    case "CONSOLE":
      return new ConsoleStrategy();
    case "EVENT_HUBS":
      return new EventHubsStrategy();
    default:
      return null;
  }
};

module.exports = {getPrintStrategy, extractFilenameFromUrl, readLinesFromFile}