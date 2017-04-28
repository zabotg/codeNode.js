module.exports = function(app) {
  app.get("/produtos",function(request, response) {
    var connection = app.infra.connectionFactory();
    var produtosBanco = new app.infra.ProdutosDAO(connection);

    produtosBanco.lista(function(err, result){
      response.render("produtos/lista",{lista:result});
    });

    connection.end();
  });

  app.get("produtos/remove", function(){
    var connection = app.infra.connectionFactory();
    var produtosBanco = app.infra.ProdutosDAO(connection);
    var produto = produtosBanco.carrega(id,callback);
    if(produto){
      protudosBanco.carrega(produto,callback);
    }
  });
}
