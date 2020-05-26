class LogService {
    constructor(printStrategy) {
        this.printStrategy = printStrategy;
    }

    changeStrategy(printStrategy) {
        this.printStrategy = printStrategy;
    }

    async print(fileContent) {
        if (!this.printStrategy) {
            throw new Error("printStrategy in not defined!");
        }

        if (!(fileContent instanceof Array)) {
            throw new Error("Can not use EventHubsStrategy: data should be an array");
        }

        return this.printStrategy.print(fileContent);
    }
}

module.exports = LogService;
