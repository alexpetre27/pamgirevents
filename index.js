function myFunction() {
  var x = document.querySelector(".topnav");
  var logo = document.querySelector(".topnav-logo");

  if (x.className === "topnav") {
      x.className += " responsive";
      logo.style.display = "none"; 
  } else {
      x.className = "topnav";
      logo.style.display = "block";
  }
}

function redirectToLink() {
  window.location.href = "acasa.html";
}
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.classList.add("loader--hidden");
      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
      });
    }, 500);
  });
  const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".closebtn");
const expandedImg = document.getElementById("expandedImg");
const galleryImages = document.querySelectorAll(".column img");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentImageIndex = 0;

function openModal(imageElement) {
  currentImageIndex = Array.from(galleryImages).indexOf(imageElement);
  modal.style.display = "block";
  updateExpandedImage(currentImageIndex);
  updateNavButtons();
}

function closeModal() {
  modal.style.display = "none";
}

function updateExpandedImage(index) {
  expandedImg.src = galleryImages[index].src;
}

function updateNavButtons() {
  prevButton.disabled = false;
  nextButton.disabled = false;
}

function changeImage(direction) {
  if (direction === "prev") {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  } else if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  }
  updateExpandedImage(currentImageIndex);
}

galleryImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    openModal(e.target);
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") {
      changeImage("prev");
    } else if (e.key === "ArrowRight") {
      changeImage("next");
    }
  }
});

prevButton.addEventListener("click", () => {
  changeImage("prev");
});

nextButton.addEventListener("click", () => {
  changeImage("next");
});