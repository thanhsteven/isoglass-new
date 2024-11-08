console.log("Đã kết nối được với file product details js");
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
    // else {
    //   console.log("sai logic rồi");
    //   return false;
    // }
  });
}
