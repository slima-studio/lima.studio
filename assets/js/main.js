const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const closeButton = document.querySelector("[data-lightbox-close]");

document.querySelectorAll("[data-work-image]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lightboxImage.src = link.href;
    lightbox.classList.add("is-open");
  });
});

closeButton?.addEventListener("click", () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("is-open");
    lightboxImage.src = "";
  }
});