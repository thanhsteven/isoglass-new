const titleChildMenu = document.querySelector(".title-child-menu");
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

const btnOpenSidebar = document.querySelector(".cate-child-main-sidebar-open");
const sidebarChild = document.querySelector(".cate-child-main-sidebar");
const cateChildModal = document.querySelector(".cate-child-modal");
const btnCloseSidebar = document.querySelector(
  ".cate-child-main-sidebar-close"
);
btnOpenSidebar.addEventListener("click", function (event) {
  sidebarChild.classList.toggle("cate-child-main-sidebar-active");
  cateChildModal.classList.toggle("cate-child-modal-show");
  if (sidebarChild.classList.contains("cate-child-main-sidebar-active")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    collapseSidebarChild();
  }
});

btnCloseSidebar.addEventListener("click", collapseSidebarChild);
cateChildModal.addEventListener("click", collapseSidebarChild);
function collapseSidebarChild() {
  sidebarChild.classList.remove("cate-child-main-sidebar-active");
  cateChildModal.classList.remove("cate-child-modal-show");
  document.documentElement.removeAttribute("style");
}

const mediaSize = 991;
window.addEventListener("resize", function () {
  if (this.innerWidth <= mediaSize) {
    collapseSidebarChild();
  }
});
