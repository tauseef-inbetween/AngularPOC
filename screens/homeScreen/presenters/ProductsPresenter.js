var ProductsPresenter = function(){

  this.getProductById = function(id){
    var interactor = new ProductsInteractor();
    return interactor.getProductById(id);
  };

  this.getAllProducts = function(){
    var interactor = new ProductsInteractor();
    return interactor.getAllProducts();
  };

  this.filterProductsAccordingToRelevance = function(tags){
    var interactor = new ProductsInteractor();
    return interactor.getFilteredProducts(tags);
  }
};