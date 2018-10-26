app.controller('ProdutoListController', function ($scope, Produtos) {
  $scope.title = 'Listagem de Produtos';
  $scope.produtos = [];
  $scope.produto = [];

  activate();

  $scope.apagar = function (produto) {
    produto.del = true;
    produto.$destroy();
  }

  function activate() {
    Produtos.$search().$then(function (produtos) {
      $scope.produtos = produtos;
    });
  }

});