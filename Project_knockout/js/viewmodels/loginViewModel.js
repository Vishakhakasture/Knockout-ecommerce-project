function LoginViewModel() {
  const self = this;

  self.loginValue = ko.observable("");
  self.password = ko.observable("");
  self.error = ko.observable("");

  self.login = function () {
    self.error("");

    const loginValue = self.loginValue().trim();
    const password = self.password();

    if (!loginValue || !password) {
      self.error("Please enter email/mobile and password.");
      return;
    }

    if (typeof users === "undefined" || !Array.isArray(users)) {
      self.error("Unable to authenticate. User data is not loaded.");
      return;
    }

    const user = users.find(function (user) {
      const email = String(user.email || "")
        .trim()
        .toLowerCase();
      const mobile = String(user.mobile || "").trim();

      return (
        (email === loginValue.toLowerCase() || mobile === loginValue) &&
        String(user.password || "") === password
      );
    });

    if (!user) {
      self.error("Invalid email/mobile or password.");
      return;
    }

    const loggedInUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    };

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    window.location.href = "index.html";
  };
}

ko.applyBindings(new LoginViewModel());
