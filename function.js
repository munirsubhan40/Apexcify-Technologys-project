
let currentIndex = 0;
const images = document.querySelectorAll('.image1');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

function showLightbox(index) {
  if (!images.length) return;
  currentIndex = index;
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="prev-btn">&#8592;</button>
      <img src="${images[currentIndex].src}" alt="">
      <button class="next-btn">&#8594;</button>
      <button class="close-btn">&times;</button>
    </div>
  `;
  lightbox.style.display = 'flex';

  lightbox.querySelector('.prev-btn').onclick = () => showLightbox((currentIndex - 1 + images.length) % images.length);
  lightbox.querySelector('.next-btn').onclick = () => showLightbox((currentIndex + 1) % images.length);
  lightbox.querySelector('.close-btn').onclick = () => lightbox.style.display = 'none';
}

images.forEach((img, idx) => {
  img.style.cursor = 'pointer';
  img.onclick = () => showLightbox(idx);
});


lightbox.onclick = e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
};


