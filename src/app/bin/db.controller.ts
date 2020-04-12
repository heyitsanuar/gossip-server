import mongoose, { ConnectionOptions } from "mongoose";
import { DBConfig } from "../config/db.config";

export class DBClient {
  private uri: string;
  private connectionOptions: ConnectionOptions;

  constructor(connectionOptions?: ConnectionOptions) {
    this.uri = "";
    this.connectionOptions = connectionOptions || {};

    this.setConnectionUri();
  }

  setConnectionUri() {
    const { user, password, name, host, port } = DBConfig;

    this.uri = `mongodb://${user}:${password}@${host}.mlab.com:${port}/${name}`;
  }

  async start(callback: () => any) {
    try {
      await mongoose.connect(this.uri, this.connectionOptions);
      callback();
    } catch (error) {
      console.log(error);
    }
  }
}
