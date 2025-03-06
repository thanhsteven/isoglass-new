// ! Start Menu
(function () {
  const navMenu = document.querySelector(".menu-nav");
  navMenu.addEventListener("click", function (event) {
    let menuHasChild = event.target.parentElement;
    if (menuHasChild.hasAttribute("data-toggle")) {
      let subMenu = menuHasChild.querySelector(".sub-menu");
      let icon = menuHasChild.querySelector(".menu-item-icon");
      // - Kiểm tra submenu có đang mở hay không ?
      if (subMenu.hasAttribute("style")) {
        // - Nếu submenu đang mở ~ icon sẽ hiện
        subMenu.removeAttribute("style"); // đóng submenu lại
        icon.classList.remove("icon-show"); // đóng luôn cái icon
      } else {
        // - Nếu submenu ko mở
        collapseMenu(); // - Đóng cái thằng ở ngoài đang mở lại
        toggleIcon(); // - Đóng luôn cái icon nằm ở ngoài và đang mở --> đóng lại
        subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Mở cái thằng đang click vào
        icon.classList.add("icon-show");
      }
    } else {
      console.log("Không có menu con bên trong nên không mở ra gì !");
      return false;
    }
  });
  const subMenus = navMenu.querySelectorAll(".sub-menu");
  const menuIcons = navMenu.querySelectorAll(".menu-item-icon");
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
  const modalFooter = document.querySelector(".footer-modal");
  const btnCloseMenu = document.querySelector(".menu-close");
  btnOpenMenu.addEventListener("click", menuMobile);
  btnCloseMenu.addEventListener("click", menuMobile);
  modalFooter.addEventListener("click", menuMobile);
  function menuMobile() {
    navMenu.classList.toggle("menu-nav-show");
    modalFooter.classList.toggle("footer-modal-show");
    if (document.documentElement.style.overflow === "hidden") {
      document.documentElement.style.removeProperty("overflow");
      document.documentElement.removeAttribute("style");
    } else {
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }
  var mediaSize = 991;
  window.addEventListener("resize", function () {
    if (this.innerWidth <= mediaSize) {
      resizeMenu();
    }
  });
  function resizeMenu() {
    modalFooter.classList.remove("footer-modal-show");
    navMenu.classList.remove("menu-nav-show");
  }
})();
// ! End Menu

// ! Start Sidebar Categories
(function () {
  const modal = document.querySelector(".footer-modal");
  const cateSidebar = document.querySelector(".cate-sidebar");
  const btnOpenSidebar = document.querySelector(".cate-sidebar-open");
  const btnCloseSidebar = cateSidebar.querySelector(".cate-sidebar-close");
  // - Mở/Đóng Sidebar bằng nút Open
  btnOpenSidebar.addEventListener("click", function (event) {
    cateSidebar.classList.toggle("cate-sidebar-active");
    modal.classList.toggle("footer-modal-show");
    if (cateSidebar.classList.contains("cate-sidebar-active")) {
      document.documentElement.style.overflow = "hidden";
    } else {
      collapseSidebar();
    }
  });
  // - Đóng Sidebar bằng nút Close
  btnCloseSidebar.addEventListener("click", collapseSidebar);
  modal.addEventListener("click", collapseSidebar);
  // - Hàm đóng Sidebar
  function collapseSidebar() {
    cateSidebar.classList.remove("cate-sidebar-active");
    modal.classList.remove("footer-modal-show");
    document.documentElement.removeAttribute("style");
  }
  var mediaSize = 991;
  window.addEventListener("resize", function () {
    if (this.innerWidth <= mediaSize) {
      resizeSidebar();
    }
  });
  function resizeSidebar() {
    collapseSidebar();
  }
})();
// ! End Sidebar
