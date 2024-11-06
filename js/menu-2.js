(function () {
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  const navMenu = document.querySelector(".menu-nav");
  // const menu_con_ngoai = navMenu.querySelectorAll(".menu .menu-item .sub-menu");
  const menu_con_ngoai = navMenu.querySelector(".menu .menu-item .sub-menu");
  const btnCloseMenu = document.querySelector(".menu-close");

  // console.log(menu_con_ngoai);

  // navMenu.addEventListener("click", function (event) {
  //   menu_con_ngoai.forEach(function (subMenu) {
  //     // console.log(subMenu);
  //     if (event.target.hasAttribute("data-toggle")) {
  //       console.log(event.target);
  //       // Click vào thì ra hết cả 2 là sai rồi
  //     }
  //   });
  // });

  navMenu.addEventListener("click", function (event) {
    // const subMenuOut = navMenu.querySelector(".sub-menu");
    // console.log(subMenuOut);

    if (event.target.hasAttribute("data-toggle")) {
      const submenu = event.target.querySelector(".sub-menu"); // subMenu tại điểm click (bên trong)

      if (submenu.hasAttribute("style")) {
        submenu.removeAttribute("style");
        toggleIcon(event.target);
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        toggleIcon(event.target);
      }
    } else {
      console.log("Không có menu con - submenu bên trong");
      return false;
    }
  });

  function toggleIcon(element) {
    const iconArrow = element.querySelector(".menu-item-icon");
    iconArrow.classList.toggle("icon-show");
  }

  function collapseSubMenu() {
    const menu_con_ngoai = navMenu.querySelector(".menu .menu-item .sub-menu");
    if (menu_con_ngoai.hasAttribute("style")) {
      menu_con_ngoai.removeAttribute("style");
    }
    // let iconmenu_con_ngoai = navMenu.querySelector(
    //   ".menu .menu-item .menu-item-wrapper .menu-item-icon.icon-show"
    // );
    // if (iconmenu_con_ngoai) {
    //   iconmenu_con_ngoai.classList.remove("icon-show");
    // }
  }

  // menuItemAll.forEach(function (menuItem) {
  //   menuItem.addEventListener("click", function (e) {
  //     iconArrow.classList.toggle("menu-item-arrow-rotate");

  //     if (e.target.hasAttribute("data-toggle")) {
  //       submenu.style.maxHeight = submenu.scrollHeight + "px";
  //       console.log(submenu);
  //     } else {
  //       console.log(false);
  //     }
  //   });
  // });

  // navMenu.addEventListener("click", function (e) {
  //   const iconArrow = e.target.querySelector(".menu-item-arrow");
  //   console.log(e.target);

  //   const submenu = navMenu.querySelector(".sub-menu");
  //   if (e.target.hasAttribute("data-toggle")) {
  //     iconArrow.classList.toggle("menu-item-arrow-rotate");
  //     submenu.style.maxHeight = submenu.scrollHeight + "px";
  //   }
  // });

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
