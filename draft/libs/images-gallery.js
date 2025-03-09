const images = document.querySelectorAll(".images-gallery-item img");
// console.log([...images]);
[...images].forEach(function (image) {
  image.addEventListener("click", function (event) {
    // * Lấy attribute
    const image = event.target;
    let imageSrc = image.getAttribute("src");
    let imageAlt = image.getAttribute("alt");

    let index =
      [...images].findIndex(function (item) {
        if (item.getAttribute("src") === imageSrc) {
          return item;
        }
      }) + 1;
    let legnth = [...images].length;

    document.documentElement.style.overflow = "hidden";

    const tplLightBox = `
    <div class="lightbox">
      <div class="lightbox-header"> 
        <div class="lightbox-left">
          <span>${index}/${legnth}</span>
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

    document.body.insertAdjacentHTML("beforeend", tplLightBox);

    // Khai báo các biến
    const lightbox = document.querySelector(".lightbox");
    const btnZoom = lightbox.querySelector(".lightbox-zoom");
    const btnFS = lightbox.querySelector(".lightbox-full");
    const btnShare = lightbox.querySelector(".lightbox-share");
    const btnClose = lightbox.querySelector(".lightbox-close");
    const imageZoom = lightbox.querySelector(".lightbox-image img");
    const btnPrev = lightbox.querySelector(".lightbox-pre");
    const btnNext = lightbox.querySelector(".lightbox-next");

    // - Xử lý button prev
    btnPrev.addEventListener("click", function (e) {
      index = index - 1;
      let newSrc = [...images][index + 1].getAttribute("src");
      let image = lightbox.querySelector(".lightbox-image img");
      console.log(newSrc);
      image.setAttribute("src", newSrc);
    });

    // - Xử lý button next
    btnNext.addEventListener("click", function (e) {
      index = index + 1;
      let newSrc = [...images][index - 1].getAttribute("src");
      let image = lightbox.querySelector(".lightbox-image img");
      console.log(newSrc);
      image.setAttribute("src", newSrc);
    });

    // * Xử lý Zoom Image
    imageZoom.addEventListener("click", function (e) {
      if (!e.target.hasAttribute("style")) {
        e.target.style.transform = "scale(1.2)";
      } else {
        e.target.removeAttribute("style");
      }
    });

    // * Xử lý button Zoom
    btnZoom.addEventListener("click", function (e) {
      const lightboxImage = document.querySelector(".lightbox-image img");
      let icon = e.target.firstElementChild;
      if (icon.classList.contains("fa-search-minus")) {
        icon.classList.remove("fa-search-minus");
        icon.classList.add("fa-search-plus");
        lightboxImage.removeAttribute("style");
      } else {
        icon.classList.remove("fa-search-plus");
        icon.classList.add("fa-search-minus");
        lightboxImage.style.transform = "scale(1.2)";
      }
    });
    // - Xử lý button Full Screen
    btnFS.addEventListener("click", function (e) {
      console.log(e.target);
    });
    // - Xử lý button Share
    btnShare.addEventListener("click", function (e) {
      console.log(e.target);
    });

    // * Xử lý button Close
    btnClose.addEventListener("click", removeLightBox);

    lightbox.addEventListener("click", function (e) {
      if (e.target.parentNode.matches(".lightbox")) {
        removeLightBox();
      }
    });

    function removeLightBox() {
      lightbox.remove();
      document.documentElement.removeAttribute("style");
    }
  });
});
