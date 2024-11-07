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
  const menuIcons = navMenu.querySelectorAll(".menu-item-icon");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (item.hasAttribute("data-toggle")) {
        const subMenu = item.querySelector(".sub-menu");
        const menuIcon = item.querySelector(".menu-item-icon");
        if (subMenu && !subMenu.hasAttribute("style")) {
          subMenus.forEach((item) => {
            item.removeAttribute("style");
          });
          menuIcons.forEach((item) => {
            item.classList.remove("icon-show");
          });
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          menuIcon.classList.add("icon-show");
        } else {
          menuIcon.classList.remove("icon-show");
          subMenu.removeAttribute("style");
        }
      } else {
        console.log(
          "cái này không có menu con bên trong nên không có gì để mở"
        );
      }
    });
  });

  function toggleMenuIcon(item) {}
})();
