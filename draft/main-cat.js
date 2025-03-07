// const cateModal = document.querySelector(".category-main-modal");
// const btnSidebar = document.querySelector(".category-main-sidebar-open");
// const sidebar = document.querySelector(".category-main-sidebar");
// const btnCloseSidebar = sidebar.querySelector(".category-main-sidebar-close");

// - Mở/Đóng Sidebar
// btnSidebar.addEventListener("click", function (event) {
//   sidebar.classList.toggle("category-main-sidebar-active");
//   cateModal.classList.toggle("category-main-modal-show");
//   if (sidebar.classList.contains("category-main-sidebar-active")) {
//     document.documentElement.style.overflow = "hidden";
//   } else {
//     collapseSidebar();
//   }
// });

// - Hàm đóng Full Sidebar
// btnCloseSidebar.addEventListener("click", collapseSidebar);
// cateModal.addEventListener("click", collapseSidebar);
// function collapseSidebar() {
//   sidebar.classList.remove("category-main-sidebar-active");
//   cateModal.classList.remove("category-main-modal-show");
//   document.documentElement.removeAttribute("style");
// }

// const mediaSize = 991;
// window.addEventListener("resize", function () {
//   if (this.innerWidth <= mediaSize) {
//     resizeSidebar();
//   }
// });
// function resizeSidebar() {
//   collapseSidebar();
// }
