const http = require("http");
const fs = require("fs");
const port = 8080;

const positions = {
    p1: 0,
    p2: 0
}

const servidor = http.createServer((pedido, resposta) => {
    const url = pedido.url;

    switch (url) {
        case "/":
            resposta.end(fs.readFileSync("./index.html"))
            break;
        case "/style.css":
            resposta.end(fs.readFileSync("./style.css"))
            break;
        case "/p1Direita":
            positions.p1 += 10;
            resposta.writeHead(200, { "Content-Type": "application/json" })
            resposta.end(JSON.stringify(positions.p1))
            break;
        case "/p1Esquerda":
            positions.p1 -= 10;
            resposta.writeHead(200, { "Content-Type": "application/json" })
            resposta.end(JSON.stringify(positions.p1))
            break;
        case "/posições":
            resposta.writeHead(200, { "Content-Type": "application/json" })
            resposta.end(JSON.stringify(positions.p1))
            break;
    }


});


servidor.listen(port, () => {
    console.log("http://localhost:8080")
});