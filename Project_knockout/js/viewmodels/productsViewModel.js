function ProductsViewModel() {
  const self = this;

  self.products = ko.observableArray(products);

  self.addToCart = function (product) {
    Cart.addToCart(product);
  };

  self.viewProduct = function (product) {
    window.location.href = "products.html?id=" + product.id;
  };
}

ko.applyBindings(new ProductsViewModel());

Cart.updateBadge();
