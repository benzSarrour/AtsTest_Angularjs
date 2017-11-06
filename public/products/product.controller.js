function controllerFN($scope, ProductService, PagerService) {

    ProductService.getCategories().then(function (categories) {
        $scope.categories = categories;
    });

    $scope.productsByCategory = function () {
        ProductService.getProducts($scope.search).then(function (data) {
            $scope.productList = data;
            $scope.setPage(1);
        });
    };
    $scope.setPage = function (page) {
        $scope.pager = PagerService.getPager($scope.productList.length, page, 20);
        $scope.pagedItems = this.productList.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
    };
}
controllerFN.$inject = ["$scope", "ProductService", "PagerService"];
angular.module("myApp").controller("ProductCtrl", controllerFN);
