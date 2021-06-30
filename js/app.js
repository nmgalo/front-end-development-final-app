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

      res.data.map((item, _) => {
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

const hotels = document.getElementById("hotels");
if (hotels != null) {
  fetch(
    "https://api2.mytravel.ge/api/ka/daily/products?LocID=776458944&LocTitle=%E1%83%AB%E1%83%95%E1%83%94%E1%83%9A%E1%83%98%20%E1%83%91%E1%83%90%E1%83%97%E1%83%A3%E1%83%9B%E1%83%98%E1%83%A1%20%E1%83%A3%E1%83%91%E1%83%90%E1%83%9C%E1%83%98&Page=1"
  )
    .then((res) => res.json())
    .then((res) => {
      let content = "";
      res.data.actual.products.map((item, _) => {
        content += `
            <div>
              <a href="#">
                <div>
                  <img src="./img/ic_star.svg" alt="" />
                  <img
                    src="${item.larges[0]}"
                    alt="Mock item"
                  />
                </div>
                <div class="info">
                  <span>2 საძინებელი</span>
                  <p>${JSON.parse(item.full_product_title)["4"]}</p>
                  <span>${item.one_night_price} ₾ / Night</span>
                </div>
              </a>
            </div>
        `;
      });

      hotels.innerHTML = content;
    });
}
