import mongoose from "mongoose"


const connection = () => {
    const database = mongoose.connection;
  
    const uri =process.env.NODE_ENV !== "production"? "mongodb://localhost:27017/RMS":
      "mongodb+srv://" +
      process.env.USERNAME_DB +
      ":" +
      process.env.PASSWORD_DB +
      "@cluster0.waqkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
    mongoose.connect(uri);
  
    database.once("open", () => {
      console.log("Database Connected with :", process.env.USERNAME_DB);
    });
  };
  
export default connection