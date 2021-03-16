import mailAddresses from '../MailAddresses.js';
import nodemailer from 'nodemailer'

export default function sendEmails(joke) {

    // A new transporter is created here, where the credentials have to be specified
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dailydadjokess@gmail.com',
            pass: 'DailyDadJokes2020'
        }
    });

    /* This loop iterates over all the mail addresses specified in the Mailaddresses.js file and swaps out the to attribute each time,
       it also sends the mail with help from the transporter object and logs the error message, if a mail couldn't be sent. */
    mailAddresses.forEach((to, index, array) => {
        const mailOptions = {
            from: 'dailydadjokess@gmail.com',
            subject: 'Your daily dad joke',
            text: joke,
            to: to
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    })
}

