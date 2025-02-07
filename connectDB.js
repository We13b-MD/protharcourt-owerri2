
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async()=>{
try{
mongoose.set('strictQuery', false) // this removes warnings from the commandline
const conn  = await mongoose.connect( process.env.mongoDbConnectionString);
console.log(`Database Connected ${conn.connection.host}`)

}catch(error){
console.log(error)
process.exit(1)
}
}

module.exports = connectDB;
