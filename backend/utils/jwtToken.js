export const generateToken = (user, message, statuscode, res)=>{
    const token = user.generateJsonWebToken();
    const cookiename=user.role==="Admin" ? "adminToken": "patientToken";
    res.status(statuscode).cookie(cookiename, token,{
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        
        httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", 
})
    .json({
        success: true,
        message,
        user,
        token,
    });
};