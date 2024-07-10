const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const toggleBtns = document.querySelectorAll(".toggler__btn");
const personsInfo = document.querySelectorAll(".person");
const key = document.querySelector("#key");
const tooltip = document.querySelector(".tooltip");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
document.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("visible");
    menuBtn.classList.remove("close");
    document.body.classList.remove("scroll-off");
  })
);

faqBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.target.parentNode.classList.toggle("open");
    e.target.classList.toggle("open");
  })
);

// переключение контента в блоке about
toggleBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e.target.parentNode.parentNode);
    const contentType =
      e.target.getAttribute("data-type") ||
      e.target.parentNode.parentNode.getAttribute("data-type");
    toggleBtns.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    personsInfo.forEach((el, idx) => {
      idx == contentType
        ? el.classList.remove("hidden")
        : el.classList.add("hidden");
    });
  })
);

// копирование кода в буфер обмена
document.querySelector("#copy").addEventListener("click", () => {
  navigator.clipboard.writeText(key.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 400);
});
