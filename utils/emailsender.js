const nodeMailer = require("nodemailer");


exports.sendMail = async (options)=>{
     //create a transporter

     const transporter = nodeMailer.createTransport({
         host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         auth:{
             user:process.env.SMTP_USER,
             pass:process.env.SMTP_PASSWORD
         }
     })
     //data
     const mailOptions = {
         from: `${options.name} <${option.email}>` ,
         to: process.env.YOUR_EMAIL ,
         subject: `Contact us form:  ${options.subject}`,
         html: options.message
     }

     await transporter.sendMail(mailOptions)
}