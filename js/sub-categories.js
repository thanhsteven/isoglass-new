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
