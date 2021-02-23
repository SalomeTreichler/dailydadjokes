import axios from "axios";

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