alert("Seja bem-vindo")

function dataehora() {
  const pDate = document.querySelector(".date");
  pDate.innerText = new Date();
}

function validateForm() {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      name.value.length > 0 &&
      phone.value.length > 0 &&
      email.value.length > 0 &&
      message.value.length > 0
    ) {
      window.location.replace("/src/pages/problema.html");
    } else {
      alert("Por favor preencha todos os campos");
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const section__carousel = document.querySelector(".section__carousel");
  const images = section__carousel.getElementsByTagName("img");
  let currentIndex = 0;

  function showImage(index) {
    for (let i = 0; i < images.length; i++) {
      if (i === index) {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
    }
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  setInterval(nextImage, 1000); 
  showImage(currentIndex);
});

dataehora();
validateForm();