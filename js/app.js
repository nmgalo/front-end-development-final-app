const burger_nav = document.getElementById("mobile-nav");
const burger_icon = document.getElementById("burger-icon");
const burger_close = document.getElementById("burger-close");

burger_icon.addEventListener("click", () => {
  burger_nav.classList.remove("closed");
});

burger_close.addEventListener("click", () => {
  burger_nav.classList.add("closed");
});

const login = document.getElementById("login");

if (login != null) {
  login.addEventListener("submit", (e) => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "" && password.value == "") {
      email.classList.add("with-error");
      password.classList.add("with-error");
    } else if (email.value == "") {
      email.classList.add("with-error");
      password.classList.remove("with-error");
    } else if (password.value == "") {
      email.classList.remove("with-error");
      password.classList.add("with-error");
    } else {
      email.classList.remove("with-error");
      password.classList.remove("with-error");

      window.location.href = "./index.html";
    }

    e.preventDefault();
  });
}

const persons = document.getElementById("persons");
if (persons != null) {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((res) => {
      const ul = document.createElement("div");
      ul.classList.add("persons");

      res.data.map((item, index) => {
        let li = document.createElement("div");
        let image = document.createElement("img");
        let span = document.createElement("span");
        span.innerText = item.first_name;
        image.src = item.avatar;
        li.appendChild(image);
        li.appendChild(span);
        ul.appendChild(li);
      });
      persons.appendChild(ul);
    });
}
