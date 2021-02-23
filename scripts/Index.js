import fetchRandomDadJoke from "./FetchRandomDadJoke.js";
import setUpServer from "./SetUpServer.js";

setUpServer()

const joke = await fetchRandomDadJoke();

console.log(joke);