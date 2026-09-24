ko.components.loaders.unshift({
  loadTemplate: function (name, templateConfig, callback) {
    if (!templateConfig.url) {
      callback(null);
      return;
    }

    fetch(templateConfig.url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(
            "Failed to load component template: " + templateConfig.url,
          );
        }

        return response.text();
      })
      .then(function (html) {
        callback(ko.utils.parseHtmlFragment(html));
      })
      .catch(function (error) {
        console.error(error);
        callback(null);
      });
  },
});
