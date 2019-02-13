app.controller("fusionchartsCtrl", function($scope, $http){
    console.log("controller carregado");

    $http.get("api/conecta.php")
    .then(function (response) {$scope.parametros = response.data.records;});

});