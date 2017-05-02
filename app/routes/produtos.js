module.exports = function(app) {
   app.get("/produtos", function(request, response) {
      var connection = app.infra.connectionFactory();
      var produtosDAO = new app.infra.ProdutosDAO(connection);
      produtosDAO.lista(function(erros, resultados){
         response.format({
            html: function(){
               response.render("produtos/lista",{lista:resultados});
            },
            json: function(){
               response.json(resultados);
            }
         });

    });
    connection.end();
   });

   app.get("/produtos/form", function(request, response){
      response.render("produtos/form", {errosValidacao:{}, produto:{}});
   });

   app.post("/produtos",function(request, response){

      var produto = request.body;
      request.assert("titulo", "Titulo é obrigatório").notEmpty();
      request.assert("preco", "Formato inválido").isFloat();

      var erros = request.validationErrors();

      if(erros){
         response.format({
            html: function(){
               response.status(400).render("produtos/form",{errosValidacao:erros, produto:produto});
            },
            json: function(){
               response.status(400).json(erros);
            }
         });
         return;
      }

       var connection = app.infra.connectionFactory();
       var produtosDAO = new app.infra.ProdutosDAO(connection);
       produtosDAO.salva(produto, function(erros, resultados){
          response.redirect("/produtos");
      });
   });
}
