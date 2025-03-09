(function () {
  // Khai báo tất cả biến trước khi sử dụng
  const navMenu = document.querySelector(".menu-nav");
  const modalFooter = document.querySelector(".footer-modal");
  const cateSidebar = document.querySelector(".cate-sidebar");
  const postSidebar = document.querySelector(".post-article-sidebar");

  // Xử lý Menu
  if (navMenu) {
    const btnOpenMenu = document.querySelector(".header-right-menu");
    const btnCloseMenu = document.querySelector(".menu-close");
    // Xử lý sự kiện
    navMenu.addEventListener("click", function (event) {
      let menuHasChild = event.target.parentElement;
      if (menuHasChild.hasAttribute("data-toggle")) {
        let subMenu = menuHasChild.querySelector(".sub-menu");
        let icon = menuHasChild.querySelector(".menu-item-icon");
        if (subMenu.hasAttribute("style")) {
          subMenu.removeAttribute("style");
          icon.classList.remove("icon-show");
        } else {
          collapseMenu();
          toggleIcon();
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          icon.classList.add("icon-show");
        }
      }
    });
    // Đóng/Hiện Menu
    function collapseMenu() {
      const subMenus = navMenu.querySelectorAll(".sub-menu");
      subMenus.forEach((item) => item.removeAttribute("style"));
    }
    // Icon
    function toggleIcon() {
      const menuIcons = navMenu.querySelectorAll(".menu-item-icon");
      menuIcons.forEach((item) => item.classList.remove("icon-show"));
    }
    if (btnOpenMenu && btnCloseMenu) {
      btnOpenMenu.addEventListener("click", openMenuMobile);
      btnCloseMenu.addEventListener("click", closeMenuMobile);
    }
    // Mở Menu Mobile
    function openMenuMobile() {
      navMenu.classList.add("menu-nav-show");
      openModal();
      addOverFlowDoc();
    }
    // Đóng Menu Mobile
    function closeMenuMobile() {
      navMenu.classList.remove("menu-nav-show");
      closeModal();
      removeOverFlowDoc();
    }
  }

  // Xử lý Sidebar
  if (cateSidebar) {
    const btnOpenSidebar = cateSidebar.querySelector(".cate-sidebar-open");
    const btnCloseSidebar = cateSidebar.querySelector(".cate-sidebar-close");
    if (btnOpenSidebar && btnCloseSidebar) {
      btnOpenSidebar.addEventListener("click", function () {
        if (cateSidebar.classList.contains("sidebar-active")) {
          closeSidebar();
          removeOverFlowDoc();
          closeModal();
        } else {
          if (navMenu && navMenu.classList.contains("menu-nav-show")) {
            closeMenuMobile();
          }
          openSidebar();
          openModal();
          addOverFlowDoc();
        }
      });
      btnCloseSidebar.addEventListener("click", closeSidebar);
    }
    // Open Sidebar
    function openSidebar() {
      cateSidebar.classList.add("sidebar-active");
      openModal();
      addOverFlowDoc();
    }
    // Close Sidebar
    function closeSidebar() {
      cateSidebar.classList.remove("sidebar-active");
      closeModal();
      removeOverFlowDoc();
    }
  }

  // Sidebar post
  if (postSidebar) {
    const btnOpenSidebarPost = postSidebar.querySelector(".post-sidebar-open");
    const btnCloseSidebarPost = postSidebar.querySelector(
      ".post-sidebar-close"
    );
    if (btnOpenSidebarPost && btnCloseSidebarPost) {
      btnOpenSidebarPost.addEventListener("click", function (event) {
        openSidebarPost();
      });
    }

    function openSidebarPost() {
      postSidebar.classList.add("sidebar-active");
    }
  }

  // Xử lý Modal
  if (modalFooter) {
    modalFooter.addEventListener("click", function () {
      if (navMenu && navMenu.classList.contains("menu-nav-show")) {
        closeMenuMobile();
      } else if (
        cateSidebar &&
        cateSidebar.classList.contains("sidebar-active")
      ) {
        closeSidebar();
      }
    });
  }
  // Open Modal
  function openModal() {
    if (modalFooter) modalFooter.classList.add("footer-modal-show");
  }
  // Close Modal
  function closeModal() {
    if (modalFooter) modalFooter.classList.remove("footer-modal-show");
  }
  // Active Document
  function addOverFlowDoc() {
    document.documentElement.style.setProperty("overflow", "hidden");
  }
  // remove Document
  function removeOverFlowDoc() {
    document.documentElement.removeAttribute("style");
    document.documentElement.style.removeProperty("overflow");
  }
  // Resize Window
  const mediaSize = 991;
  window.addEventListener("resize", function () {
    if (this.innerWidth <= mediaSize) {
      if (navMenu) closeMenuMobile();
      if (cateSidebar) closeSidebar();
      closeModal();
      removeOverFlowDoc();
    }
  });
})();

// Xử lý FAQ
const answerTitles = document.querySelectorAll(".support-title");
[...answerTitles].forEach(function (item) {
  item.addEventListener("click", function (event) {
    let answerContent = event.target.nextElementSibling;
    let icon = event.target.querySelector(".fa-angle-down");
    if (!answerContent.hasAttribute("style")) {
      collapseAnswers();
      answerContent.style.maxHeight = answerContent.scrollHeight + "px";
      icon.style.transform = "rotateX(180deg)";
    } else {
      answerContent.removeAttribute("style");
      icon.removeAttribute("style");
    }
  });
});

// Đóng FAQ
const answerItems = document.querySelectorAll(".support-item");
function collapseAnswers() {
  [...answerItems].forEach(function (item) {
    let title = item.querySelector(".support-title");
    let answer = item.querySelector(".support-answer");
    let icon = title.querySelector(".fa-angle-down");
    title.removeAttribute("style");
    answer.removeAttribute("style");
    icon.removeAttribute("style");
  });
}

// Page Title cho danh mục con
const titleChildMenu = document.querySelector(".title-child-menu");
if (titleChildMenu) {
  const btnChildTitleSubCate = titleChildMenu.querySelector(
    ".title-child-menu-btn"
  );
  btnChildTitleSubCate.addEventListener("click", function (event) {
    let subMenuTitleList = titleChildMenu.querySelector(".title-child-list");
    let subMenuTitleIcon = titleChildMenu.querySelector(".fa-angle-down");
    if (subMenuTitleList.hasAttribute("style")) {
      subMenuTitleList.removeAttribute("style");
      subMenuTitleIcon.classList.remove("fa-show");
    } else {
      subMenuTitleList.style.maxHeight = subMenuTitleList.scrollHeight + "px";
      subMenuTitleIcon.classList.add("fa-show");
    }
  });
}
