(function () {
  const btnMenu = document.querySelector(".header-right-menu");
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".menu-btn-close");
  const modal = document.querySelector(".modal");

  btnMenu.addEventListener("click", function (event) {
    menu.classList.toggle("menu-show");
    console.log(menu);
  });

  closeMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-show");
  });

  function showModal() {}
})();

