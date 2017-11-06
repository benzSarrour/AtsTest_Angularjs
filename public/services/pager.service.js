function PagerFN() {

    this.getPager = function (totalItems, currentPage, pageSize) {
        var currentPage = (typeof currentPage !== 'undefined') ? currentPage : 1;
        var PageSize = (typeof pageSize !== 'undefined') ? pageSize : 20;
        var totalPages = Math.ceil(totalItems / PageSize);
        var startPage, endPage;
        startPage = 1;
        endPage = totalPages;
        var startIndex = (currentPage - 1) * PageSize;
        var endIndex = Math.min(startIndex + PageSize - 1, totalItems - 1);
        var pages = [];
        for (var i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: PageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
PagerFN.$inject = [];
angular.module("myApp").service("PagerService", PagerFN);