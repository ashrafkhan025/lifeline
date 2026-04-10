import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import {Message} from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async (req, res,next) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    if(!firstName || !lastName || !email || !phoneNumber || !message){
        return next(new ErrorHandler("Please enter all fields!", 400));
    }

        await Message.create({ firstName, lastName, email, phoneNumber, message });
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
        });
    
});

export const getAllMessages=catchAsyncErrors(async(req,res,next)=>{
    const messages=await Message.find();
    res.status(200).json({
        success:true,
        messages,
    });
});
