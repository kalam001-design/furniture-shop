AOS.init();
// Scroll Button Script -->
  document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function() {
      const wrapper = this.parentElement.querySelector('.scrolling-wrapper');
      const scrollAmount = 200; // Pixel scroll per click
      if (this.dataset.direction === 'left') {
        wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  });
// Scroll Button Script Ended -->
// Scroll to Top Script -->
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
// Scroll to Top Script Ended -->
// Responsive Navbar Script -->
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuItems = document.querySelectorAll('.navbar .nav-link');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      navbar.classList.remove('active');
    });
  });
// Responsive Navbar Script Ended -->
// Countdown Timer Script -->
function startCountdown(duration) {
 let timer = duration, hours, minutes, seconds;
    setInterval(function () {
          hours = parseInt(timer / 3600, 10);
          minutes = parseInt((timer % 3600) / 60, 10);
          seconds = parseInt(timer % 60, 10);

          // Add leading zero to numbers < 10
          hours = hours < 10 ? "0" + hours : hours;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          // Update countdown display
          document.getElementById('hours').textContent = hours;
          document.getElementById('minutes').textContent = minutes;
          document.getElementById('seconds').textContent = seconds;

          // Decrease timer
          if (--timer < 0) {
              timer = duration; // Reset timer if needed
          }
      }, 1000);
  }

  window.addEventListener('load', function () {
      const countdownDuration = 60 * 60 * 24; // Set countdown duration (e.g., 24 hours)
      startCountdown(countdownDuration);
  });
// Countdown Timer Script Ended -->

