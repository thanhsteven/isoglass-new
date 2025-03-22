const images = document.querySelectorAll(".images-gallery-item img");
// console.log([...images]);
[...images].forEach(function (image) {
  image.addEventListener("click", function (event) {
    const image = event.target;
    let imageSrc = image.getAttribute("src");
    let imageAlt = image.getAttribute("alt");
    let lastIndex = 0;
    let index =
      [...images].findIndex((item) => item.getAttribute("src") === imageSrc) +
      1;
    let indexLenght = [...images].length;

    // console.log("index tại điểm click: " + index);

    // Khởi tạo LightBox
    const tplLightBox = `
    <div class="lightbox">
      <div class="lightbox-header">
        <div class="lightbox-left">
          <span>${index}/${indexLenght}</span>
        </div>
        <div class="lightbox-right">
          <button class="lightbox-zoom" title="Zoom in/out">
            <i class="fa fa-search-plus" aria-hidden="true"></i>
          </button>
          <button class="lightbox-full" title="Full Screen">
            <i class="fa fa-expand" aria-hidden="true"></i>
          </button>
          <button class="lightbox-share" title="Share">
            <i class="fa fa-share-alt-square" aria-hidden="true"></i>
          </button>
          <button class="lightbox-close" title="Close">
            <i class="fa fa-window-close" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="lightbox-body">
        <button class="lightbox-pre">
          <i class="fa fa-angle-left" aira-hidden="true"></i>
        </button>
        <div class="lightbox-image">
          <img src="${imageSrc}" alt="${imageAlt}">
        </div>
        <button class="lightbox-next">
          <i class="fa fa-angle-right" aira-hidden="true"></i>
        </button>
      </div>
    </div>`;
    document.body.insertAdjacentHTML("afterend", tplLightBox);
    document.documentElement.style.overflow = "hidden";

    // Khai báo các biến
    const lightbox = document.querySelector(".lightbox");
    const btnZoom = lightbox.querySelector(".lightbox-zoom");
    const btnFS = lightbox.querySelector(".lightbox-full");
    const btnShare = lightbox.querySelector(".lightbox-share");
    const btnClose = lightbox.querySelector(".lightbox-close");
    const imageZoom = lightbox.querySelector(".lightbox-image img");
    const btnPrev = lightbox.querySelector(".lightbox-pre");
    const btnNext = lightbox.querySelector(".lightbox-next");

    // Xử lý button next
    btnNext.addEventListener("click", nextImageGallery);
    function nextImageGallery() {
      index = index + 1;
      if (index > indexLenght) {
        index = 1;
      }
      let newSrc = [...images][index - 1].getAttribute("src");
      let nextÍmage = lightbox.querySelector(".lightbox-image img");
      nextÍmage.setAttribute("src", newSrc);
      let sttSpan = lightbox.querySelector(".lightbox-left span");
      sttSpan.innerText = `${index}/${indexLenght}`;
    }

    // Xử lý button prev
    btnPrev.addEventListener("click", prevImageGallery);
    function prevImageGallery() {
      index = index - 1;
      if (index == 0) {
        index = indexLenght;
      }
      let prevSrc = [...images][index - 1].getAttribute("src");
      let prevImage = lightbox.querySelector(".lightbox-image img");
      prevImage.setAttribute("src", prevSrc);
      let sttSpan = lightbox.querySelector(".lightbox-left span");
      sttSpan.innerText = `${index}/${indexLenght}`;
    }

    // Xử lý Zoom Image
    imageZoom.addEventListener("click", zoomImageGallery);
    btnZoom.addEventListener("click", zoomImageGallery);
    function zoomImageGallery() {
      let imageShow = document.querySelector(".lightbox-image img");
      let icon = btnZoom.firstElementChild;
      if (!imageShow.classList.contains("zoom-in")) {
        imageShow.classList.add("zoom-in");
        icon.classList.remove("fa-search-plus");
        icon.classList.add("fa-search-minus");
      } else {
        imageShow.classList.remove("zoom-in");
        imageShow.removeAttribute("class");
        icon.classList.add("fa-search-plus");
        icon.classList.remove("fa-search-minus");
      }
    }

    // Xử lý button Full Screen
    btnFS.addEventListener("click", fullScreen);
    function fullScreen() {
      let iconFS = btnFS.firstElementChild;
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        iconFS.classList.remove("fa-expand");
        iconFS.classList.add("fa-compress");
      } else {
        document.exitFullscreen();
        iconFS.classList.remove("fa-compress");
        iconFS.classList.add("fa-expand");
      }
    }

    // Xử lý button Share
    btnShare.addEventListener("click", function (e) {
      console.log(e.target);
    });

    // Xử lý button Close
    btnClose.addEventListener("click", removeLightBox);
    lightbox.addEventListener("click", removeLightBox);
    function removeLightBox(event) {
      if (
        event.target.matches(".lightbox-image") ||
        event.target == btnClose ||
        event.target.parentNode.matches(".lightbox")
      ) {
        lightbox.remove();
        document.documentElement.removeAttribute("style");
      }
    }
  });
});
