const OrientDBClient = require("orientjs").OrientDBClient;

(async function() {
  let client;
  try {
    client = await OrientDBClient.connect({ host: "localhost" });
    console.log("Connected");
  } catch (e) {
    console.log(e);
  }

  if (client) {
    await client.close();
    console.log("Disconnected");
  }
})();
