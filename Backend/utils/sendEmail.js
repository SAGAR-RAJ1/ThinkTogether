//! Not used , we are using google auth just ignore it bcz i just dont want to delete it

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "ThinkTogether Email Verification",
            html: `
                <h2>Welcome to ThinkTogether</h2>
                <p>Your OTP is:</p>
                <h1>${otp}</h1>
                <p>This OTP is valid for 5 minutes.</p>
            `,
        });

        console.log("Email sent successfully");
    } catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports = sendEmail;