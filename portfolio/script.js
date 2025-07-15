


const helloTexts = [
    "Hello"
  ];
  
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const helloElement = document.getElementById("dynamic-hello");
  
  function typeEffect() {
    const currentText = helloTexts[currentIndex];
    
    if (isDeleting) {
      helloElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      helloElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
  
    let typingSpeed = isDeleting ? 40 : 50; // faster delete, slower typing
  
    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 1000; // pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % helloTexts.length; // move to next text
      typingSpeed = 500; // pause before typing next
    }
  
    setTimeout(typeEffect, typingSpeed);
  }
  


  

//   Scroll Effect 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  
// Nav Bar Scroll Effect
  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('nav-bar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  




  