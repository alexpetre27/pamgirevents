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
  
  let currentStep = 1;
  const form = document.getElementById("progressive-form");
  const progressBar = document.querySelector(".progress");
  const sections = document.querySelectorAll(".form-section");
  const totalSteps = sections.length;
  const submitBtn = document.getElementById("submitBtn");
  
  sections[currentStep - 1].style.display = "block";
  document.getElementById("prevBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "inline-block";
  
  function nextStep() {
    if (validateCurrentStep()) {
      sections[currentStep - 1].style.display = "none";
      currentStep++;
      sections[currentStep - 1].style.display = "block";
      updateProgressBar();
  
      if (currentStep === totalSteps) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("prevBtn").style.display = "inline-block";
        submitBtn.style.display = "inline-block";
      } else {
        document.getElementById("nextBtn").style.display = "inline-block";
        document.getElementById("prevBtn").style.display = "inline-block";
        submitBtn.style.display = "none";
      }
    }
  }
  
  function prevStep() {
    if (currentStep > 1) {
      sections[currentStep - 1].style.display = "none";
      currentStep--;
      sections[currentStep - 1].style.display = "block";
      updateProgressBar();
    }
  
    if (currentStep === 1) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("nextBtn").style.display = "inline-block";
      document.getElementById("prevBtn").style.display = "inline-block";
      submitBtn.style.display = "none";
    }
  }
  
  function validateCurrentStep() {
    switch (currentStep) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      case 4:
        return validateStep4();
      case 5:
        return validateStep5();
      case 6:
        return validateStep6();
      case 7:
        return validateStep7();
      default:
        return true;
    }
  }
  function validateStep1() {
    const numeField = document.getElementById("numeField");
    if (numeField.value.length < 3 || numeField.value.length > 50) {
      alert("Numele trebuie sa aiba intre 3 si 50 de caractere.");
      return false;
    }
    return true;
  }
  
  function validateStep2() {
    const judetField = document.getElementById("judetField");
    if (judetField.value === "#") {
      alert("Selectati un judet.");
      return false;
    }
    return true;
  }
  
  function validateStep3() {
    const tipEvenimentField = document.getElementById("tipEvenimentField");
    if (tipEvenimentField.value === "#") {
      alert("Selectati tipul evenimentului.");
      return false;
    }
    return true;
  }
  
  function validateStep4() {
    const dataField = document.getElementById("dataField");
    if (!dataField.value) {
      alert("Alegeti data evenimentului.");
      return false;
    }
    return true;
  }
  
  function validateStep5() {
    const invitatiField = document.getElementById("invitatiField");
    const invitatiValue = parseInt(invitatiField.value, 10);
    if (!invitatiValue) {
      alert("Precizati numarul de invitati.");
      return false;
    } else if (invitatiValue < 1 || invitatiValue > 1000) {
      alert("Numarul de invitati trebuie sa fie intre 1 si 1000.");
      return false;
    }
    return true;
  }
  
  function validateStep6() {
    const telefonField = document.getElementById("telefonField");
    if (!telefonField.value) {
      alert("Specificati numarul de telefon.");
      return false;
    } else if (telefonField.value.length < 4 || telefonField.value.length > 11) {
      alert("Numarul de telefon trebuie sa contina intre 4 si 11 caractere.");
      return false;
    }
    return true;
  }
  
  function updateProgressBar() {
    const progressPercentage = (currentStep / totalSteps) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Multumim pentru informatii, va vom contacta inapoi cat mai curand!");
  });
  var selectElement = document.getElementById("judetField");
  
  for (var i = 0; i < selectElement.options.length; i++) {
    if (i < 5) {
      selectElement.options[i].style.display = "block";
    } else {
      selectElement.options[i].style.display = "none";
    }
  }
  