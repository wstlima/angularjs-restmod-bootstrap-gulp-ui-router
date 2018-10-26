app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/app/produto/list/list.html',
      controller: 'ProdutoListController'
    })

    .state('add', {
      url: '/produtos/add',
      templateUrl: 'src/app/produto/add/add.html',
      controller: 'ProdutoAddController'
    })

    .state('editar', {
      url: '/produtos/{itemId}',
      params: {
        obj: null
      },
      templateUrl: 'src/app/produto/add/add.html',
      controller: 'ProdutoEditController'
    });

  // Utilizando o HTML5 History API
  $locationProvider.html5Mode(true);
});
