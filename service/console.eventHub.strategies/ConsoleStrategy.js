class ConsoleStrategy {
  print(data) {
    console.log("Printing to console...");

    const printedLines = [];
    const hundredsCount = Math.ceil(data.length / 100);

    let i = 1;

    while (i <= hundredsCount) {
      const maxLine = data.length > i * 100 ? i * 100 : data.length;
      const minLine = maxLine > 100 ? maxLine - 100 : 0;

      console.log(`Lines from ${minLine} to ${maxLine}`);

      const formattedData = data
        .slice(minLine, maxLine)
        .map((city) => Object.values(city).join(","));

      console.log(formattedData);

      printedLines.push(`Line ${minLine} - ${maxLine} was printed to console`);

      i++;
    }

    console.log("Printing finished successfully!");

    return printedLines;
  }
}
module.exports = ConsoleStrategy