import fetchRandomDadJoke from "./FetchRandomDadJoke.js";
import setUpServer from "./SetUpServer.js";
import sendEmails from "./SendEmail.js";

// In this file all the different scripts get called in the correct order.
setUpServer()

const joke = await fetchRandomDadJoke();

sendEmails(joke);