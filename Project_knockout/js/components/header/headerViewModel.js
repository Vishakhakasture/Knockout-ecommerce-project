function HeaderViewModel() {
  const self = this;

  self.isLoggedIn = ko.observable(false);
  self.username = ko.observable("");
  self.cartCount = ko.observable(0);

  self.checkAuthentication = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);

      self.isLoggedIn(true);

      self.username(user.email.split("@")[0]);
    } else {
      self.isLoggedIn(false);
      self.username("");
    }
  };

  self.authAction = function () {
    if (self.isLoggedIn()) {
      localStorage.removeItem("loggedInUser");

      self.isLoggedIn(false);
      self.username("");
    } else {
      window.location.href = "login.html";
    }
  };

  self.checkAuthentication();

  // Get the current cart count
  self.cartCount(Cart.getCount());
}
