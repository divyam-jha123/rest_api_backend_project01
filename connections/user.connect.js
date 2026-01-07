const mongoose = require("mongoose");


async function connectMongoDb(url) {
    return mongoose
      .connect(url) // it gives a promise
    .then(() => {
    console.log("connected to db...");
  })
  .catch((err) => {
    console.log("error by db:", err);
  });

}

module.exports = {
    connectMongoDb
}