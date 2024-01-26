window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    document.getElementById("scrollToTopBtn").classList.add("show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      observer.unobserve(entry.target);
    }
  });
});

let aboutElement = document.querySelector("#statistics");
observer.observe(aboutElement);

