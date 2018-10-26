app.controller('ProdutoEditController', function ($scope, Produtos, $state, $stateParams) {
  $scope.produto = [];
  $scope.title = 'Detalhes do Produto';

  Produtos.$find($stateParams.itemId).$then(function (produto) {
    $scope.produto = produto;
  });

  $scope.submit = function (prd) {
    Produtos.$find($stateParams.itemId).$then(function (selproduto) {
      selproduto = prd;
      $scope.produto.$save();

      Produtos.$search().$then(function (produtos) {
        $scope.produtos = produtos;
        $state.go('home');
      });
    });
  }
});