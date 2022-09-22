import mongoose from "mongoose";

const connection = () => {
  const database = mongoose.connection;
  const uri: string = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@rms.7yaypuk.mongodb.net/RMS`;
  console.log(uri);
  mongoose.connect(uri);
  database.once("open", () => {
    console.log("Database Connected with :", process.env.USERNAME_DB);
  });
};

export default connection;
