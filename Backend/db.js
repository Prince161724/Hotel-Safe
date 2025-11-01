const mongoose=require('mongoose');
require('dotenv').config();

const Url = process.env.MONGO_URL || "mongodb+srv://root:moot@hotel.zl9hnzd.mongodb.net/?retryWrites=true&w=majority&appName=Hotel";

const connectToMongo=async ()=>{
  await mongoose.connect(Url).then(()=>{
    console.log("✅ Connected to MongoDB");
    console.log("Environment:", process.env.NODE_ENV || 'development');
  })
  .catch((err)=>{
    console.log("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if database connection fails
  })
}

module.exports=connectToMongo;