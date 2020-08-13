//Servidor
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages");

//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

//Inicio e configuração do servidor      
server.use(express.urlencoded({ extended: true })) //Receber dados do req.body
.use(express.static("public")) //Configurar arquivos státicos (css, scripts, imagens)
.get("/", pageLanding) //Rota de aplicação
.get("/study", pageStudy) //Rota de aplicação
.get("/give-classes", pageGiveClasses) //Rota de aplicação
.post("/save-classes", saveClasses)
.listen(5500);//Start do servidor