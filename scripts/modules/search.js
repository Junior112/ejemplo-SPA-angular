/*
    Declaración del modulo search
*/
(function (){

   angular
    .module("module-search", [])
    .controller("SearchCtrl", function ($scope, $ocLazyLoad){
        $scope.title = "Search Page";
        $ocLazyLoad.load(['directives']);
    });

})();