const Cart = {
  getCart: function () {
    const cart = localStorage.getItem("cart");

    if (!cart) {
      return [];
    }

    try {
      return JSON.parse(cart);
    } catch (error) {
      console.error("Unable to read cart:", error);
      return [];
    }
  },

  saveCart: function (cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  },

  addToCart: function (product) {
    const cart = Cart.getCart();

    const existingProduct = cart.find(function (item) {
      return item.id === product.id;
    });

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    Cart.saveCart(cart);

    Cart.updateBadge();

    console.log("Added to cart:", product.name);
  },

  getCartCount: function () {
    const cart = Cart.getCart();

    return cart.reduce(function (total, item) {
      return total + item.quantity;
    }, 0);
  },

  updateBadge: function () {
    const badge = document.querySelector(".cart-badge");

    if (!badge) {
      return;
    }

    const count = Cart.getCartCount();

    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  },
};
