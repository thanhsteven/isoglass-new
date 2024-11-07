console.log("Logic bị lỗi khi mở menu khác thì menu còn lại không đóng được.");
(function () {
  const navMenu = document.querySelector(".menu-nav");
  const menuIconAll = navMenu.querySelectorAll(".menu-item-icon");

  navMenu.addEventListener("click", function (event) {
    let menuItem = event.target;
    if (menuItem.hasAttribute("data-toggle")) {
      const subMenu = menuItem.querySelector(".sub-menu");
      if (!subMenu.hasAttribute("style")) {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      } else {
        subMenu.removeAttribute("style");
      }
    } else {
      console.log("Không có menu con => Khỏi xử lý sự kiện");
      return false;
    }
  });

  function collapseSubMenu() {
    navMenu.querySelectorAll(".sub-menu").forEach((item) => {
      item.removeAttribute("style");
    });
  }

  function toggleIcon(element) {
    const iconArrow = element.querySelector(".menu-item-icon");
    iconArrow.classList.toggle("icon-show");
  }

  // - Xử lý Menu mở và đóng
  const btnCloseMenu = document.querySelector(".menu-close");
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  btnOpenMenu.addEventListener("click", menuMobile);
  btnCloseMenu.addEventListener("click", menuMobile);
  modal.addEventListener("click", menuMobile);
  function menuMobile() {
    navMenu.classList.toggle("menu-nav-show");
    modal.classList.toggle("modal-show");
    if (document.body.style.overflow === "hidden") {
      document.body.style.removeProperty("overflow");
    } else {
      document.body.style.setProperty("overflow", "hidden");
    }
  }
})();

