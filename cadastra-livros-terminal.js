var http = require('http');

var configuracoes = {
   hostname: "localhost",
   port: "3000",
   path: "/produtos",
   method: "post",
   headers: {
      "Accept":"application/json",     //RECEBER DADOS EM JSON
      "Content-type":"application/json" //ENVIAR DADOS EM JSON
   }
};

var client = http.request(configuracoes, function(response){
  console.log(response.statusCode);
  response.on("data", function(body){
    console.log("Corpo:" + body);
  });
});

var produto = {
   titulo: "",
   descricao: "node, javascript e um pouco sobre http",
   preco: 100
};

client.end(JSON.stringify(produto));
