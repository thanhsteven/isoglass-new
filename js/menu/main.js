(function () {
  // -> Khai báo Biến
  const btnMenu = document.querySelector(".header-right-menu");
  const menu = document.querySelector(".menu");
  const closeMenu = document.querySelector(".menu-btn-close");
  const modal = document.querySelector(".modal");
  // -> Biến Menu Con
  // const menuChild = document.querySelector(".menu-child");
  const menuListItemAll = document.querySelectorAll(".menu-list-item-wrapper");

  // console.log(menuChild);

  // ! Đang xử lý

  menuListItemAll.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (event) {
      event.stopPropagation();
      const menuChild = event.target.nextElementSibling;
      if (menuChild) {
        menuChild.classList.toggle("menu-child-show");
      } else {
        return false;
      }
    });
  });

  // -> Sự kiện
  btnMenu.addEventListener("click", openMenuMobile);
  closeMenu.addEventListener("click", closeMenuMobile);
  modal.addEventListener("click", closeMenuMobile);

  // -> Hàm - Mở/Đóng Menu
  function openMenuMobile() {
    menu.classList.toggle("menu-show");
    modal.classList.toggle("modal-show");
    document.body.style.setProperty("overflow", "hidden");
  }
  function closeMenuMobile() {
    menu.classList.toggle("menu-show");
    modal.classList.toggle("modal-show");
    document.body.removeAttribute("style");
  }
})();
