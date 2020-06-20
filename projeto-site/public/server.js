const express = require('express');
const crocserver = express();

crocserver.use(express.static(__dirname));
crocserver.get('/', (request, response) => {
    response.render('index');
});

crocserver.listen(3000, () => {
    console.log(` Servidor rodando na porta 3000 \n Para encerrar: ctrl + C `);
});
