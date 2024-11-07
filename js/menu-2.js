console.log("Đang kiểm tra lại logic menu ! chưa hoàn thành");
(function () {
  const navMenu = document.querySelector(".menu-nav");
  const subMenus = navMenu.querySelectorAll(".sub-menu");
  const menuIcons = navMenu.querySelectorAll(".menu-item-icon");

  navMenu.addEventListener("click", function (event) {
    let menuHasChild = event.target;
    if (menuHasChild.hasAttribute("data-toggle")) {
      let subMenu = menuHasChild.querySelector(".sub-menu");
      let icon = menuHasChild.querySelector(".menu-item-icon");
      // Kiểm tra submenu có đang mở hay không ?
      if (subMenu.hasAttribute("style")) {
        // Nếu submenu đang mở ~ icon sẽ hiện
        subMenu.removeAttribute("style"); // đóng submenu lại
        icon.classList.remove("icon-show"); // đóng luôn cái icon
      } else {
        // Nếu submenu ko mở
        collapseMenu(); // Đóng cái thằng ở ngoài đang mở lại
        toggleIcon(); // Đóng luôn cái icon nằm ở ngoài và đang mở --> đóng lại
        subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Mở cái thằng đang click vào
        icon.classList.add("icon-show");
      }
    } else {
      console.log("Không có menu con => Khỏi xử lý sự kiện");
      return false;
    }
  });

  function collapseMenu() {
    [...subMenus].forEach((item) => {
      if (item.hasAttribute("style")) {
        item.removeAttribute("style");
      }
    });
  }

  function toggleIcon() {
    [...menuIcons].forEach((item) => {
      if (item.classList.contains("icon-show")) {
        item.classList.remove("icon-show");
      }
    });
  }

  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  const btnCloseMenu = document.querySelector(".menu-close");

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

// nếu có style --> remove style
// nếu ko có style --> remove hết trước mấy thằng đang có đi rồi mới thêm style vào
