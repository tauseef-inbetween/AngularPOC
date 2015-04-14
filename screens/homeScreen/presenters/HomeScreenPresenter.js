$(document).ready(function () {

  var productsPresenter = new ProductsPresenter();
  //var productsTreePresenter = new ProductTagsTreeHomeScreenPresenter();

  /*$('#switchToProduct1').on('click', function () {
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
   });*/

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
    this.productsPresenter = new ProductsPresenter();
    this.ngModel = 'Product';
    this.isButtonClicked = false;
    this.renderProductTags = function () {
      var data = this.productsPresenter.filterProductsAccordingToRelevance(this.tags);
      renderProducts(data);
    };
  });

  app.controller('ButtonController', function () {
    this.productsPresenter = new ProductsPresenter();
    this.product = {};
    this.getProductTags = function (tree, productId) {
      this.product = this.productsPresenter.getProductById(productId);
      tree.tags = this.product.tags;
      tree.isButtonClicked = true;
      tree.renderProductTags();
    }
  });

  app.directive("productContainer", function () {
    return {
      restrict: "E",
      scope: {
        ngModel : '='
      },
      templateUrl: "../../../inhouseComponents/productsView/product-content.html",
      controller: function($scope){
        console.log($scope.$parent.tree.tags);
      },
      link: function(scope, el, attrs) {

      }
    };
  });

  app.directive("productChanger", function () {
      return {
        restrict : "E",
        templateUrl: '<div id="productsChanger"></div>',
        link: function(scope, element) {

        }
      };
  });

  app.directive("tagElement", function () {
    return {
      restrict: "E",
      transclude: true,
      replace: true,
      templateUrl: "tagElement1",
      link: function (scope, element, attrs) {

      }
    };
  });

  app.directive('slider', function() {
    return {
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      link: function(scope, elem, attrs) {
        scope.$watch('ngModel', function(newValue, oldValue){
          if(newValue != oldValue) {
            $(elem).slider('value', newValue);
            if(scope.$parent.$parent.tree.isButtonClicked != true) {
              scope.$parent.$parent.tree.renderProductTags();
            }
          }
        });

        return $(elem).slider({
          range: false,
          animate: true,
          min: -100,
          max: 100,
          value: scope.ngModel,
          slide: function(event, ui) {
            return scope.$apply(function () {
              scope.ngModel = ui.value;
              scope.$parent.$parent.tree.isButtonClicked = false;
            });
          }
        });
      }
    };
  });
})();
