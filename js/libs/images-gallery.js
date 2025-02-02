console.log("Đã kết nối với image gallery");
const images = document.querySelectorAll(".images-gallery-item img");
[...images].forEach(function (image) {
  image.addEventListener("click", function (event) {
    const imageItem = event.target.parentElement;
    imageItem.classList.add("images-gallery-lightbox");
    document.documentElement.style.overflow = "hidden";
  });
});
