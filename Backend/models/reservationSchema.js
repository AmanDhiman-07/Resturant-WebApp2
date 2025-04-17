import mongoose from "mongoose";
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be contain ay least 3 characters!"],
        maxLength: [30, "First name can not exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "last name must be contain at least 3 characters!"],
        maxLength: [30, "last name can not exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a vaid email!"]
    },
    phone: {
        type: Number,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})

export const Reservation = mongoose.model("Reservation", reservationSchema);