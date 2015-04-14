var ProductThumbWrapper = React.createClass({
  getInitialState: function(){
    return {
      productsToDisplay : {
        "Product - 1": true,
        "Product - 2": true,
        "Product - 3": true,
        "Product - 4": true,
        "Product - 5": true
      },
      notClickedOnce : true
    };
  },
  handleClickOfButton: function(e) {
    var pro = e.currentTarget.textContent.trim();
    this.state.productsToDisplay[pro] = !this.state.productsToDisplay[pro];
    if(this.state.notClickedOnce) {
      for(var obj in  this.state.productsToDisplay) {
        this.state.productsToDisplay[obj] = false;
      }
      this.state.notClickedOnce = false;
      this.state.productsToDisplay[pro] = true;
    }
    this.setState({productsToDisplay : this.state.productsToDisplay});
  },
  render: function(){
    var arr = [];
    for(var obj in  this.state.productsToDisplay) {
      arr.push(<button class="productBtn" onClick={this.handleClickOfButton}> {obj} </button>);
    }
    return (
        <div>
          {arr}
          <ProductWrapper products = {this.props.products} productsToDisplay = {this.state.productsToDisplay}/>
        </div>
    )
  }
});

var ProductWrapper = React.createClass({
  render: function(){
    var products = this.props.products;
    var arr = [];
    for(var i=0; i<products.length; i++){
      if(this.props.productsToDisplay[products[i].name]){
        arr.push(<ProductThumb index={i} product = {products[i]}/>);
      }
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
