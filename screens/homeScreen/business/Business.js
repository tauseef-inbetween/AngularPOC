var Business = function(){

  this.getAllTags = function(){
    return allTags;
  };

  this.getAllProducts = function(){
    return allProducts;
  };

  this.getProductById = function(productId){
    var products = allProducts;
    for(var i=0; i<products.length; i++){
      if(productId == products[i].id){
        return products[i];
      }
    }
    return null;
  };

  this.getProductsById = function(productId){
    var products = allProducts;
    var res = [];
    for(var i=0; i<products.length; i++){
      if(productId == products[i].id){
        res.push(products[i]);
      }
    }
    return res;
  };

  this.getFilteredProducts = function(tags){
    var result = [];
    for(var i=0; i<tags.length; i++){
     if(tags[i].relevance >= 0){
       var tagId = tags[i].id;
       result = $.merge(result, this.getProductsById(tagId));
     }
    }
    return result;
  };
};