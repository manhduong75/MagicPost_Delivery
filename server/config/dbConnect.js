const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/magic-post", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    });
};
module.exports = dbConnect;
