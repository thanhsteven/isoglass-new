(function () {
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  const navMenu = document.querySelector(".menu-nav");
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

  const menuItems = navMenu.querySelectorAll(".menu-item");
  const subMenus = navMenu.querySelectorAll(".sub-menu");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      toggleMenuIcon(item);
      if (item.hasAttribute("data-toggle")) {
        const subMenu = item.querySelector(".sub-menu");
        if (subMenu && !subMenu.hasAttribute("style")) {
          subMenus.forEach((item) => {
            item.removeAttribute("style");
          });
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        } else {
          subMenu.removeAttribute("style");
        }
      } else {
        console.log(
          "cái này không có menu con bên trong nên không có gì để mở"
        );
      }
    });
  });

  const icons = navMenu.querySelectorAll(".menu-item-icon");

  function toggleMenuIcon(item) {
    icons.forEach(function (element) {
      element.classList.remove("icon-show");
    });
    const icon = item.querySelector(".menu-item-icon");
    if (item.querySelector(".sub-menu").hasAttribute("style")) {
      icon.classList.remove("icon-show");
    } else {
      icon.classList.add("icon-show");
    }
  }
})();

