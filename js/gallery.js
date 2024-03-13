const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const featured = document.querySelector('.featured-item');
let leftInterval;
let rightInterval;
let itemWidth = galleryItems[0].offsetWidth;
let left = 0;

const selectItem = (e) => {
  if (e.target.classList.contains('active')) return;
	
  featured.style.backgroundImage = e.target.style.backgroundImage;
	
  for (var i = 0; i < galleryItems.length; i++) {
    if (galleryItems[i].classList.contains('active'))
      galleryItems[i].classList.remove('active');
  }
	
  e.target.classList.add('active');
}

const galleryWrapLeft = () => {
  left = 0;
  let first = gallery.firstElementChild;
  gallery.removeChild(first);
  gallery.appendChild(first);
  gallery.style.left = '0';
}

const galleryWrapRight = () => {
  left = -itemWidth;
  let last = gallery.lastElementChild;
  gallery.removeChild(last);
  gallery.insertBefore(last, gallery.firstElementChild);
  gallery.style.left = -itemWidth + 'px';
}

const initMoveLeft = () => {
  itemWidth = galleryItems[0].offsetWidth;
  leftInterval = setInterval(moveLeft, intervalFrequency);
}

const initMoveRight = () => {
  itemWidth = galleryItems[0].offsetWidth;
  leftInterval = setInterval(moveRight, intervalFrequency);
}

const moveLeft = () => {
  gallery.style.left = left + 'px';
  if (left > -itemWidth)  {
    left -= scrollRate;
  } else {
    galleryWrapLeft();
  }
}

const moveRight = () => {
  gallery.style.left = left + 'px';
  if (left < 0) {
    left += scrollRate;
  } else {
    galleryWrapRight();
  }
}

const stopMovement = () => {
  clearInterval(leftInterval);
  clearInterval(rightInterval);
}

let gx1, gx2, gy1, gy2, dgx, dgy;

const galleryMouseDown = (e) => {
  gx1 = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  gy1 = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
}

const galleryMouseUp = (e) => {
  gx2 = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  gy2 = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
  dgx = gx2 - gx1;
  dgy = gy2 - gy1;
	
  if (Math.abs(dgx) < 40) selectItem(e);
}

let x1, x2 ,dx, y1, y2, dy;
let newLeft;

const handleTouchStart = (e) => {
  itemWidth = galleryItems[0].offsetWidth;
  x1 = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  y1 = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
  if (e.type === 'mousedown') gallery.addEventListener('mousemove', handleTouchMove);
}

const handleTouchMove = (e) => {
  x2 = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  y2 = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
  dx = x2 - x1;
  dy = y2 - y1;
	
  left = +gallery.style.left.slice(0, -2);
  newLeft = left + dx;
  gallery.style.left = newLeft + 'px';

  if (dx > 0 && newLeft >= 0) 
    galleryWrapRight();	
  if (newLeft <= -itemWidth)
    galleryWrapLeft();
	
  x1 = x2;
  y1 = y2;
}

const handleTouchEnd = (e) => {
  if (e.type === 'mouseup') gallery.removeEventListener('mousemove', handleTouchMove);
}

const globalTouchEnd = (e) => {
  if (e.type === 'mouseup') gallery.removeEventListener('mousemove', handleTouchMove);
}


gallery.addEventListener('mousedown', handleTouchStart);
gallery.addEventListener('mouseup', handleTouchEnd);
window.addEventListener('mouseup', globalTouchEnd);

let images = [
  "img/icons/section_8-1/1.jpg",
  "img/icons/section_8-1/2.png",
  "img/icons/section_8-1/3.jpg",
  "img/icons/section_8-1/4.jpg",
  "img/icons/section_8-1/5.png",
  "img/icons/section_8-1/6.jpg",
  "img/icons/section_8-1/7.jpg",
  "img/icons/section_8-1/8.png",
  "img/icons/section_8-1/9.jpg",
  "img/icons/section_8-1/10.jpg",
  "img/icons/section_8-1/11.png",
  "img/icons/section_8-1/12.png",
  "img/icons/section_8-1/13.png",
  "img/icons/section_8-1/14.jpg",
  "img/icons/section_8-1/15.jpg",
  "img/icons/section_8-1/16.jpg",
  "img/icons/section_8-1/17.jpg",
  "img/icons/section_8-1/18.jpg",
  "img/icons/section_8-1/19.jpg",
  "img/icons/section_8-1/20.jpg",
  "img/icons/section_8-1/21.jpg",
  "img/icons/section_8-1/22.jpg",
  "img/icons/section_8-1/23.jpg",
  "img/icons/section_8-1/24.jpg"
];

const init = () => {
  featured.style.backgroundImage = 'url(' + images[0] + ')';
  for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
    galleryItems[i].addEventListener('mousedown', galleryMouseDown);
    galleryItems[i].addEventListener('mouseup', galleryMouseUp);
  }
}

init();