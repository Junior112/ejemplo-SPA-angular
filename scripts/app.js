/*
    Declaración del modulo principal
*/
(function (){

   angular
    .module("app", ["module-contact", "module-home", "module-search", "oc.lazyLoad", "ngRoute"])
    .controller("AppCtrl", function (){})
    .config(["$ocLazyLoadProvider", lazyLoadProvider])
    .config(["$routeProvider", routeProvider]);

    //Configuración de lazyload
    function lazyLoadProvider($oc){
        $oc.config({
            debug: true,
			event: false,
			modules: [{
				name: "directives",
				serie: true,
				files: [
                    "/scripts/directives.js"
                ] 
			}]
        });
    }

    function routeProvider($rp){

	    $rp 
            .when("/", {templateUrl: "/views/home.html"})
            .when("/search", {templateUrl: "/views/search.html"})
            .when("/contact", {
                templateUrl: "/views/contact.html",
                resolve: {
                    deps: ["$ocLazyLoad", function(a) {
						return a.load(["directives"]);
					}]
                }
            })
            .otherwise({redirectTo: "/404"});

        $rp.when("/404", {templateUrl: "/views/404.html"})
    }

})();