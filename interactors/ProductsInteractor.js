var ProductsInteractor = function(){
  this.getTagsDataForProduct = function(productId){

  };

  this.saveTagsDataForProduct = function(productId, tags){

  };

  this.getAllProducts = function(){
    var business = new Business();
    return business.getAllProducts();
  };

  this.getProductById = function(id){
    var business = new Business();
    return business.getProductById(id);
  };

  this.getFilteredProducts = function(tags){
    var business = new Business();
    return business.getFilteredProducts(tags);
  };
};