// - Tab Sản phẩm
const tabLists = document.querySelectorAll(".tab-info-list");
const tabContents = document.querySelectorAll(".tab-info-content");
[...tabLists].forEach((tablist) => {
  tablist.addEventListener("click", handleTagClick);
});

function handleTagClick(event) {
  [...tabLists].forEach((item) => {
    item.classList.remove("tab-active");
  });
  event.target.classList.add("tab-active");
  let tabNumber = event.target.getAttribute("data-tab");
  [...tabContents].forEach((content) => {
    content.classList.remove("tab-active");
    if (tabNumber === content.getAttribute("data-tab")) {
      content.classList.add("tab-active");
    }
  });
}

// - Sidebar Sản phẩm
const btnOpenSidebar = document.querySelector(".product-content-sidebar-open");
const productSidebar = document.querySelector(".product-content-sidebar");
const productModal = document.querySelector(".product-modal");
const btnCloseSidebar = document.querySelector(
  ".product-content-sidebar-close"
);
btnOpenSidebar.addEventListener("click", function (e) {
  productSidebar.classList.toggle("product-content-sidebar-active");
  productModal.classList.toggle("product-modal-show");
  if (productSidebar.classList.contains("product-content-sidebar-active")) {
    document.documentElement.style.overflow = "hidden";
  } else {
    collapseProductSidebar();
  }
});

productModal.addEventListener("click", collapseProductSidebar);
btnCloseSidebar.addEventListener("click", collapseProductSidebar);

function collapseProductSidebar() {
  productSidebar.classList.remove("product-content-sidebar-active");
  productModal.classList.remove("product-modal-show");
  document.documentElement.removeAttribute("style");
}

