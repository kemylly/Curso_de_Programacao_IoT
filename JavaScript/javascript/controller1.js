var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
  $scope.nome = "Mel";
  $scope.sobrenome = "Melke";
  idade = $scope.idade = 18;
  $scope.idadefuturo = idade+5;
});