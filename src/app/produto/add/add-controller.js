app.controller('ProdutoAddController', function ($scope, Produtos, $state) {
  $scope.title = 'Novo Produto';

  $scope.submit = function (prd) {
    Produtos.$create({
      nome: prd.nome,
      codbarras: prd.codbarras,
      descricao: prd.descricao,
      quantidade: prd.quantidade,
      categoria: prd.categoria
    });

    Produtos.$search().$then(function (produtos) {
      $scope.produtos = produtos;
      $state.go('home');
    });
  }
});