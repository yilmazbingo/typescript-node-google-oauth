import MongoDB, { MongoDBTransportInstance } from "winston-mongodb";

// const a=MongoDB:MongoDBTransportInstance
// const MongoDB: MongoDBTransportInstance;

// const transport = new MongoDB({
// 	//...
// });

import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new MongoDB.MongoDB({ db: process.env.DATABASE_URL! }),
    // new winston.transports.
  ],
});
