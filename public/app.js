/**
 * Created by User on 11/1/2017.
 */

function configFN($routeProvider) {
    $routeProvider.when("/products", {

        templateUrl: "/products/product.view.html",
        controller: "ProductCtrl"
    })
        .otherwise({redirectTo: "/products"});
}

var myApp = angular.module("myApp", ["ngRoute", "ngResource"]).config(configFN);
