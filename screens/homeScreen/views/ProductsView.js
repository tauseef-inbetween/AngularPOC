var ProductThumbWrapper = React.createClass({
  render: function(){
    var products = this.props.products;
    var arr = [];
    for(var i=0; i<products.length; i++){
      arr.push(<ProductThumb index={i} product = {products[i]}/>);
    }
    return (
        <div className = "productsWrapper">
          {arr}
        </div>
    )
  }
});

var ProductThumb = React.createClass({
  render: function(){
    var product = this.props.product;
    return (
        <div className = "productThumb">
          <div className = "productCount">{this.props.index}</div>
          <div className = "productId">{product.id}</div>
          <div className = "productTitle">{product.name}</div>
        </div>
    )
  }
});

function renderProducts(data){
  var container = $('#productsContainer').get(0);
  React.render(
      <ProductThumbWrapper products = {data}/>,
      container
  );
}
