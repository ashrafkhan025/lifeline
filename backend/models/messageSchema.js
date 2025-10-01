import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minLength:[3,"First name must be at least 3 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3,"Last name must be at least 3 characters!"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email!"]
        },
    phoneNumber: { 
        type: String,
        required: true,
        minLength:[10,"Phone number must be at least 10 characters!"],
        maxLength:[14,"Phone number must be at most 14 characters!"],
    },

    message: {
        type: String,
        required: true,
        minLength:[10,"Message must be at least 10 characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);
 
