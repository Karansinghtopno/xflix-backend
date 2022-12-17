const mongoose = require("mongoose");
const app = require("./app");
// require("dotenv").config();
const config = require("./config/config");


let server;
// const NODE_ENV= process.env.NODE_ENV;
// const SERVER_PORT= process.env.SERVER_PORT;
// const MONGODB_URL= process.env.MONGODB_URL;
mongoose.set("strictQuery", false);
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("\n");
    console.log("Connected to MongoDb");
    server = app.listen(config.SERVER_PORT, () => {
      console.log(`App is running on port ${config.SERVER_PORT}`);
    });
    return;
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
// mongoose
//   .connect(MONGODB_URL)
//   .then(() => {
//     console.log("Connected to MongoDb");
//     server = app.listen(SERVER_PORT, () => {
//       console.log(`App is running on port ${SERVER_PORT}`);
//     });
//     return;
//   })
//   .catch((error) => {
//     console.log("error connecting to MongoDB:", error.message);
//   });

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  if (server) {
    server.close();
  }
});
