
import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const SendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill full reservation form", 400));
    }

    try {
        await Reservation.create({ firstName, lastName, email, phone, time, date })
        res.status(201).json({
            success: true,
            massage: "Reservation sent successfully!"
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const ValidationError = Object.values(error.errors).map(err => err.massage);
            return next(new ErrorHandler(ValidationError.join(' , '), 400));
        }
        return next(error);
    }
};