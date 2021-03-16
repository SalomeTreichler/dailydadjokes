import http from "http";

//in this file the server is set up, and if the server is running, a success message is printed out in the console

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end();
});

export default function setUpServer() {
    const hostname = '127.0.0.1';
    const port = 3000;

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

export function stopServer(){
    server.close();
}
