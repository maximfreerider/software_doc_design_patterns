const hubs = require("@azure/event-hubs");
const { EventHubClient } = hubs;

const connectionString = process.env.EVENT_HUBS_URL;
const client = EventHubClient.createFromConnectionString(connectionString);

module.exports = client;
