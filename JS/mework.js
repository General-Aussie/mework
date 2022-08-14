window.addEventListener('scroll', function(){
  const header = document.querySelector('ul');
  header.classList.toggle("sticky", window.scrollY > 0);
});


const slideshowImages = document.querySelectorAll(".container .slideshow-img");

const nextImageDelay = 6000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}