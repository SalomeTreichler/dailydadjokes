import mailAddresses from '../MailAddresses.js';
import nodemailer from 'nodemailer'

export default function sendEmails(joke) {
    const smtpTransport = nodemailer.createTransport("smtps://dailydadjokess%40gmail.com:"+encodeURIComponent('DailyDadJokes2020#123') + "@smtp.gmail.com:465");
/*    const smtpTransport = nodemailer.createTransport('SMTP', {
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: false,
        auth: xoauth2: xoauth2.createXOAuth2Generator({user: 'dailydadjokess@gmail.com', pass: 'DailyDadJokes2020'})
    });*/

    const message = {
        from: 'dailydadjokess@gmail.com',
        subject: 'Your daily dad joke',
        text: joke,
    }

    mailAddresses.forEach((to, index, array) => {
        message.to = to;
        smtpTransport.sendMail(message, (error) => {
            error ? console.log("Failed to send E-Mail to ", to) : console.log("E-Mail to ", to, " has been sent")
        })
            .then(() => console.log("E-Mail to ", to, " has been sent"))
            .error((error) => console.log(error))
    })
}

