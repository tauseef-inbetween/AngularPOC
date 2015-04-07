$(document).ready(function () {

  var productsPresenter = new ProductsPresenter();
  var productsTreePresenter = new ProductTagsTreeHomeScreenPresenter();

  $('#switchToProduct1').on('click', function () {
    var product = productsPresenter.getProductById('1');
    productsTreePresenter.populateTagsDataInTree(product.tags);
  });

  $('#switchToProduct2').on('click', function () {
    var product = productsPresenter.getProductById('2');
    productsTreePresenter.populateTagsDataInTree(product.tags);
  });

  $('#switchToProduct3').on('click', function () {
    var product = productsPresenter.getProductById('3');
    productsTreePresenter.populateTagsDataInTree(product.tags);
  });

  $('#switchToProduct4').on('click', function () {
    var product = productsPresenter.getProductById('4');
    productsTreePresenter.populateTagsDataInTree(product.tags);
  });

  $('#switchToProduct5').on('click', function () {
    var product = productsPresenter.getProductById('5');
    productsTreePresenter.populateTagsDataInTree(product.tags);
  });

  setTimeout(function () {
    renderProducts(productsPresenter.getAllProducts());
  }, 100);

});


(function () {
  var link = document.querySelector('link[rel="import"]');
  var $template = $(link.import).find('.remoteTemplate');
  var $clone = $template.clone();
  $('#abc').append($clone);

  var tagsInteractor = new TagsInteractor();
  var tags = tagsInteractor.getMasterTagsData();

  var app = angular.module('store', []);

  app.controller('TreeController', function ($scope) {
    this.tags = tags;
  });

  app.directive("tagElement", function () {
    return {
      restrict: "E",
      transclude: true,
      replace: true,
      templateUrl: "tagElement1",
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
          },
          change: function () {
            var productsPresenter = new ProductsPresenter();
            var angEl = angular.element('.ng-scope').eq(1);
            var scope = angEl.scope();
            var controller = angEl.controller();
            var data = productsPresenter.filterProductsAccordingToRelevance(controller.tags);
            renderProducts(data);
          }
        });
      }
    };
  });
})();
