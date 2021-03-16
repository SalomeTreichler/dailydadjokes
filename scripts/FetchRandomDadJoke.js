import axios from "axios";

/*
This script gets the dad joke object from the api and returns only the joke
*/
export default function fetchRandomDadJoke() {
    return axios.get('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then((response) => {
            return response.data.joke;
        });
}