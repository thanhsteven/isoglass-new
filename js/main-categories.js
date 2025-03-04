const cateModal = document.querySelector(".category-main-modal");
const btnSidebar = document.querySelector(".category-main-sidebar-open");
const sidebar = document.querySelector(".category-main-sidebar");
const btnCloseSidebar = sidebar.querySelector(".category-main-sidebar-close");

// - Mở/Đóng Sidebar
btnSidebar.addEventListener("click", function (event) {
  sidebar.classList.toggle("category-main-sidebar-active");
  cateModal.classList.toggle("category-main-modal-show");
  if (sidebar.classList.contains("category-main-sidebar-active")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    collapseSidebar();
  }
});

// - Hàm đóng Full Sidebar
btnCloseSidebar.addEventListener("click", collapseSidebar);
cateModal.addEventListener("click", collapseSidebar);
function collapseSidebar() {
  sidebar.classList.remove("category-main-sidebar-active");
  cateModal.classList.remove("category-main-modal-show");
  document.documentElement.removeAttribute("style");
}

// - Hàm open các Answer
const answerTitles = document.querySelectorAll(".category-main-support-title");
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

// - Hàm đóng các Answer lại
const answerItems = document.querySelectorAll(".category-main-support-item");
function collapseAnswers() {
  [...answerItems].forEach(function (item) {
    let title = item.querySelector(".category-main-support-title");
    let answer = item.querySelector(".category-main-support-answer");
    let icon = title.querySelector(".fa-angle-down");
    title.removeAttribute("style");
    answer.removeAttribute("style");
    icon.removeAttribute("style");
  });
}

const mediaSize = 991;
window.addEventListener("resize", function () {
  if (this.innerWidth <= mediaSize) {
    resizeSidebar();
  }
});
function resizeSidebar() {
  collapseSidebar();
}
