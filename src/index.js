const express = require("express");
const app = express();

const routes = require("./routes");

app.use(routes);

app.listen(3333, error => {
    if (error) {
        console.log("Erro ao iniciar servidor", error);
    } else {
        console.log("Server iniciado");
    }
})