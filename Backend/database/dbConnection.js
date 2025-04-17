import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANTAMA"
    }).then(() => {
        console.log("Connected to database successfuly!")
    }).catch((err) => {
        console.log(`Some error occured while connedting to database ${err}`);
    })
}

