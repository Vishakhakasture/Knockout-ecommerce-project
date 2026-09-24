ko.components.register("header-component", {
  viewModel: HeaderViewModel,

  template: {
    url: "js/components/header/header.html",
  },
});

ko.components.register("footer-component", {
  template: {
    url: "js/components/footer/footer.html",
  },
});
