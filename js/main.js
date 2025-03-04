console.log("Đã kết nối với file main.js");

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
  const mediaSize = 991;
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

// - Khai báo biến trong Main categories
const modal = document.querySelector(".footer-modal");
const btnSidebar = document.querySelector(".category-main-sidebar-open");
const sidebar = document.querySelector(".category-main-sidebar");
const btnCloseSidebar = sidebar.querySelector(".category-main-sidebar-close");

// - Mở/Đóng Sidebar
btnSidebar.addEventListener("click", function (event) {
  sidebar.classList.toggle("category-main-sidebar-active");
  modal.classList.toggle("category-main-modal-show");
  if (sidebar.classList.contains("category-main-sidebar-active")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    collapseSidebar();
  }
});

const mediaSize = 991;
window.addEventListener("resize", function () {
  if (this.innerWidth <= mediaSize) {
    resizeSidebar();
  }
});
function resizeSidebar() {
  collapseSidebar();
}
