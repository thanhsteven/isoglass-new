const images = document.querySelectorAll(".images-gallery-item img");
[...images].forEach(function (image) {
  image.addEventListener("click", function (event) {
    const image = event.target;
    let imageSrc = image.getAttribute("src");
    let imageAlt = image.getAttribute("alt");
    document.documentElement.style.overflow = "hidden";
    const tplLightBox = `
    <div class="lightbox">
      <div class="lightbox-header"> 
        <div class="lightbox-left"><span>2/16</span></div>
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
        <img class="lightbox-image" src="${imageSrc}" alt="${imageAlt}">
        <button class="lightbox-next"> 
          <i class="fa fa-angle-right" aira-hidden="true"></i>
        </button>
      </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", tplLightBox);
    const btnZoom = document.querySelector(".lightbox-zoom");
    const btnFS = document.querySelector(".lightbox-full");
    const btnShare = document.querySelector(".lightbox-share");
    const btnClose = document.querySelector(".lightbox-close");
    // - Xử lý button Zoom
    btnZoom.addEventListener("click", function (e) {
      const lightboxImage = document.querySelector(".lightbox-image");
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
    // - Xử lý button Close
    btnClose.addEventListener("click", function (e) {
      console.log(e.target);
    });
  });
});

document.body.addEventListener("click", closeLightBox);
function closeLightBox(event) {
  if (
    event.target.matches(".lightbox-body") ||
    event.target.matches(".lightbox-header")
  ) {
    event.target.parentNode.remove();
    document.documentElement.removeAttribute("style");
  }
}
