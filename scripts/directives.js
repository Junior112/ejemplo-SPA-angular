(function (){

    angular
        .module("module-directives", [])
        .directive("sayHello", function() {
            return {
                scope: {
                to: '@to'
                },
                restrict: "E",
                template: '<p>Hello {{to}}</p>'
            };
        });
})();