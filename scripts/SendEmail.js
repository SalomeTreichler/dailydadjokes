import mailAddresses from '../MailAddresses.js';
import nodemailer from 'nodemailer';
import {stopServer} from "./SetUpServer.js";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
        if (validateEmail(to)) {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                    stopServer();
                }
            });
        }
    })
}

