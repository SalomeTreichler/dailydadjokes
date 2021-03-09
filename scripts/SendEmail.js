import mailAddresses from '../MailAddresses.js';
import nodemailer from 'nodemailer'

export default function sendEmails(joke) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dailydadjokess@gmail.com',
            pass: 'DailyDadJokes2020'
        }
    });

    mailAddresses.forEach((to) => {
        const mailOptions = {
            from: 'dailydadjokess@gmail.com',
            subject: 'Your daily dad joke',
            text: joke,
            to: to
        }
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    })
}

