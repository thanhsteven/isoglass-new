(function () {
  const navMenu = document.querySelector(".menu-nav");
  navMenu.addEventListener("click", function (event) {
    let menuHasChild = event.target.parentElement;
    if (menuHasChild.hasAttribute("data-toggle")) {
      let subMenu = menuHasChild.querySelector(".sub-menu");
      let icon = menuHasChild.querySelector(".menu-item-icon");
      // * Kiểm tra submenu có đang mở hay không ?
      if (subMenu.hasAttribute("style")) {
        // * Nếu submenu đang mở ~ icon sẽ hiện
        subMenu.removeAttribute("style"); // đóng submenu lại
        icon.classList.remove("icon-show"); // đóng luôn cái icon
      } else {
        // * Nếu submenu ko mở
        collapseMenu(); // Đóng cái thằng ở ngoài đang mở lại
        toggleIcon(); // Đóng luôn cái icon nằm ở ngoài và đang mở --> đóng lại
        subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Mở cái thằng đang click vào
        icon.classList.add("icon-show");
      }
    } else {
      console.log("Không có menu con bên trong nên không mở ra gì !");
      return false;
    }
  });
  // * submenu
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

  // - Sự kiện Mở và Đóng Menu Mobile
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const btnCloseMenu = document.querySelector(".menu-close");
  btnOpenMenu.addEventListener("click", openMenuMobile);
  btnCloseMenu.addEventListener("click", closeMenuMobile);
  // * Open Menu Mobile
  function openMenuMobile() {
    navMenu.classList.add("menu-nav-show");
    openModal();
    addOverFlowDoc();
  }
  // * Close Menu Mobile
  function closeMenuMobile() {
    navMenu.classList.remove("menu-nav-show");
    closeModal();
    removeOverFlowDoc();
  }

  // - Sự kiện Modal
  const modalFooter = document.querySelector(".footer-modal");
  modalFooter.addEventListener("click", function (event) {
    if (navMenu.classList.contains("menu-nav-show")) {
      closeMenuMobile();
    } else if (cateSidebar.classList.contains("cate-sidebar-active")) {
      closeSidebar();
    }
  });
  // * Open Modal
  function openModal() {
    modalFooter.classList.add("footer-modal-show");
  }
  // * Close Modal
  function closeModal() {
    modalFooter.classList.remove("footer-modal-show");
  }
  // * Add Overflow Document
  function addOverFlowDoc() {
    document.documentElement.style.setProperty("overflow", "hidden");
  }
  // * Remove Overflow Document
  function removeOverFlowDoc() {
    document.documentElement.removeAttribute("style");
    document.documentElement.style.removeProperty("overflow");
  }

  // - Resize window
  var mediaSize = 991;
  window.addEventListener("resize", function () {
    if (this.innerWidth <= mediaSize) {
      closeMenuMobile();
      closeSidebar();
      closeModal();
      removeOverFlowDoc();
    }
  });

  // - Sử lý code sidebar
  // - Sự kiện Mở và Đóng Sidebar
  const cateSidebar = document.querySelector(".cate-sidebar");
  if (!cateSidebar) return;

  const btnCloseSidebar = cateSidebar.querySelector(".cate-sidebar-close");
  if (!btnCloseSidebar) return;
  // * Đóng sidebar bằng nút close
  btnCloseSidebar.addEventListener("click", closeSidebar);

  const btnOpenSidebar = cateSidebar.querySelector(".cate-sidebar-open");
  // if (!btnOpenSidebar) return;
  // * Đóng/Mở Sidebar bằng nút open
  btnOpenSidebar.addEventListener("click", function (event) {
    if (cateSidebar.classList.contains("cate-sidebar-active")) {
      closeSidebar();
      removeOverFlowDoc();
      closeModal();
    } else {
      if (navMenu.classList.contains("menu-nav-show")) {
        closeMenuMobile();
      }
      openSidebar();
      openModal();
      addOverFlowDoc();
    }
  });
  // * Open Sidebar
  function openSidebar() {
    cateSidebar.classList.add("cate-sidebar-active");
    openModal();
    addOverFlowDoc();
  }
  // * Close Sidebar
  function closeSidebar() {
    cateSidebar.classList.remove("cate-sidebar-active");
    closeModal();
    removeOverFlowDoc();
  }
})();
