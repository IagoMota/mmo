const http = require("http");
const fs = require("fs");
const port = process.env.port || 8080;

const positions = {
    p1: 0,
    p2: 0
}

const servidor = http.createServer((pedido, resposta) => {
    const url = pedido.url;

    switch (url) {
        case "/":
            resposta.writeHead(200, { "Content-Type": "text/html" })
            resposta.end(fs.readFileSync("./index.html"))
            break;
        case "/style.css":
            resposta.writeHead(200, { "Content-Type": "text/css" })
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
        case "/pos":
            resposta.writeHead(200, { "Content-Type": "application/json" })
            resposta.end(JSON.stringify(positions.p1))
            break;
    }


});


servidor.listen(port,"0.0.0.0", () => {
    console.log("http://localhost:8080")
});