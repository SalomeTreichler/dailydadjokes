import fetchRandomDadJoke from "./FetchRandomDadJoke.js";
import setUpServer from "./SetUpServer.js";
import sendEmails from "./SendEmail.js";

setUpServer()

const joke = await fetchRandomDadJoke();

sendEmails(joke);