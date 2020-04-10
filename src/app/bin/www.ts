require("dotenv").config();

import { DBClient } from "./db.controller";
import { ServerConfig } from "../config/server.config";

const { AppController } = require("../app.controller");

const dbClient = new DBClient({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbClient.start(() => {
  AppController.listen(ServerConfig.port, () =>
    console.log(`Server running on port ${ServerConfig.port}`)
  );
});
