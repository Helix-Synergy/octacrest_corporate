const mongoose=require("mongoose");
async function ConnectionDB(){
try {
    const connection=await mongoose.connect(process.env.MONGO_URI)
    if(connection){
console.log("Database connected successfully")
    }
    
} catch (error) {
  console.log("Error in database connection",error)  
}
}
module.exports=ConnectionDB;