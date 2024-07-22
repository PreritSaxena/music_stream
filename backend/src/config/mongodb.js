import mongoose from "mongoose";

// export const dbConnection = () => {
//     mongoose.connect(process.env.MONGODB_URI , {
//         dbName : "spotify",
//     }).then(() => {
//         console.log("Connected to DB!")
//     }).catch(err => {
//         console.log(`error in connecting to db : ${err}`)
//     })
// }

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("connection established")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
}

export default connectDB;