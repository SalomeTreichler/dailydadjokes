import mailAddresses from '../MailAddresses.js';
import nodemailer from 'nodemailer';
import {stopServer} from "./SetUpServer.js";

// this function checks if the email is valid
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default function sendEmails(joke) {

    // A new transporter is created here, where the credentials have to be specified
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dailydadjokess@gmail.com',
            pass: 'DailyDadJokes2020'
        }
    });

    /* This loop iterates over all the mail addresses specified in the Mailaddresses.js file and swaps out the to attribute each time.
       If the mail address is valitd, it sends the mail with help from the transporter object and logs the error message, if a mail couldn't be sent.
       After all the mails have been sent, the server is stopped. */
    mailAddresses.forEach((to) => {
        const mailOptions = {
            from: 'dailydadjokess@gmail.com',
            subject: 'Your daily dad joke',
            text: joke,
            to: to
        }
        if (validateEmail(to)) {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        }
        stopServer();
    })
}

