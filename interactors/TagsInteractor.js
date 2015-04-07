var TagsInteractor = function(){

  this.getMasterTagsData = function(){
    var business = new Business();
    return business.getAllTags();
  };

  this.getTagsDataForCategory = function(category){

  };
};