function ProductServiceFN(Product) {

    this.getCategories = function () {
        var categories = ["All"];
        return this.getProducts({category: "All"}).then(function (products) {
            products.map(function (product) {
                if (categories.indexOf(product.category) == -1) {
                    categories.push(product.category);
                }
            });
            return categories;
        });
    };

    this.getProducts = function (search) {
        var products = Product.query().$promise;
        if (search.category == "All") {
            return products;
        } else {
            return products.then(function (data) {
                return data.filter(function (pdt) {
                    return pdt.category == search.category;
                });
            });
        }
    }
}
ProductServiceFN.$inject = ['Product'];
angular.module("myApp").service("ProductService", ProductServiceFN)