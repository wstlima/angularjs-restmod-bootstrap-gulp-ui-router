var app = angular.module('app', ['ui.router', 'restmod', 'ui.router']);
app.factory('Produtos', function (restmod) {
    return restmod.model('http://localhost:4000/produto');  
});