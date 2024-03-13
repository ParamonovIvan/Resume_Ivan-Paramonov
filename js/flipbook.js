let right = document.getElementsByClassName("right");
let si = right.length;
let z = 1;

const turnRight = () => {
  if (si >= 1) {
    si--;
  }
  else {
    si = right.length - 1;
    const sttmot = (i) => {
      setTimeout(function() {
        right[i].style.zIndex = "auto";
      },300);
    }
    for (let i = 0; i < right.length; i++) {
      right[i].className = "right";
      sttmot(i);
      z = 1;
    }
  }
  right[si].classList.add("flip");
  z++;
  right[si].style.zIndex = z;
};

const turnLeft = () => {
  if (si < right.length) {
    si++;
  }
  else {
    si = 1;
    for (let i = right.length - 1; i > 0; i--) {
      right[i].classList.add("flip");
      right[i].style.zIndex = right.length + 1 - i;
    }
  }
  right[si - 1].className = "right";
  setTimeout(function() {
    right[si - 1].style.zIndex = "auto";
  },350);
}