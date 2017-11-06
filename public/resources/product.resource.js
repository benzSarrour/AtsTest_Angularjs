/**
 * Created by User on 11/1/2017.
 */

function productFN($resource){
    var url="http://localhost:3000/api/products";

    var product=$resource(url);
    return product;
}
productFN.$inject=["$resource"];
angular.module("myApp").factory("Product",productFN);
