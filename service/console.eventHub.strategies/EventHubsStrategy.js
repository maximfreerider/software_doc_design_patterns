const EventHubsClient = require("../../config/event_hubs.js");

class EventHubsStrategy {
  print(data) {
    console.log("Sending the data to Azure Event Hubs ...");

    const printedLines = [];
    const hundredsCount = Math.ceil(data.length / 100);

    let i = 1;

    while (i <= hundredsCount) {
      const maxLine = data.length > i * 100 ? i * 100 : data.length;
      const minLine = maxLine > 100 ? maxLine - 100 : 0;

      console.log(`Sending lines from ${minLine} to ${maxLine}...`);

      const formattedData = data
        .slice(minLine, maxLine)
        .map((city) => Object.values(city).join(","));

      EventHubsClient.send(formattedData);

      printedLines.push(`Line ${minLine} - ${maxLine} was sent to Azure Event Hubs`);

      i++;
    }

    console.log("The data was sent successfully!");

    return printedLines;
  }
}

module.exports = EventHubsStrategy;
