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
