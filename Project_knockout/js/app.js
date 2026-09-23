const viewModel = {
  header: new HeaderViewModel(),
  home: new HomeViewModel(),
};

ko.applyBindings(viewModel);

Cart.updateBadge();
