var ProductTagsTreeHomeScreenPresenter = function () {

/*
  this.getTagsDataToGenerateTree = function () {
    var tagsInteractor = new TagsInteractor();
    return tagsInteractor.getMasterTagsData();
  };
*/

  this.populateTagsDataInTree = function (tagsData) {
    var productsPresenter = new ProductsPresenter();
    var angEl = angular.element('.ng-scope').eq(1);
    var scope = angEl.scope();
    var controller = angEl.controller();
    controller.tags = tagsData;
    scope.$apply();
    var data = productsPresenter.filterProductsAccordingToRelevance(tagsData);
    renderProducts(data);
  };

 /* this.getTagsDataFromTree = function () {

  };

  this.generateTagsTree = function (tagsTreeData) {
    tagsTreeData = tagsTreeData || this.getTagsDataToGenerateTree();

    app.controller('TreeController', function ($scope) {
      this.tags = tagsTreeData;
      $scope.tags = tagsTreeData;
    });

    app.directive("tagElement", function () {
      return {
        restrict: "E",
        *//* scope: {
         name: "=tag.tagName",
         relevance: "=tag.tagRelevance"
         },*//*
        transclude: true,
        replace: true,
        templateUrl: "tagElement.html",
        link: function (scope, el, attrs) {
          $(el).find('.tagListElSlider').slider({
            range: false,
            min: -100,
            max: 100,
            value: scope.tag.relevance,
            slide: function (event, ui) {
              scope.$apply(function () {
                scope.tag.relevance = ui.value;
              });
            }
          });
        }
      };
    });
  }*/

};