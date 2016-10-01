/*
    Declaración del modulo home
*/
(function (){

   angular
    .module("module-home", [])
    .controller("HomeCtrl", function ($scope){
        $scope.title = "Home Page";
    });

})();