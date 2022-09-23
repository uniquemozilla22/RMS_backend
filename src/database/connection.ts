import mongoose from "mongoose";

const connection = () => {
  const database = mongoose.connection;
  // const uri: string = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@rms.7yaypuk.mongodb.net/RMS`;
  const uri = "mongodb://localhost:27017/RMS";
  mongoose.connect(uri);
  database.once("open", () => {
    console.log("Database Connected with :", process.env.USERNAME_DB);
  });
};

export default connection;
