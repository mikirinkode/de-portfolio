window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight -200) {
    document.getElementById("scrollToTopBtn").classList.add("show");
  } else {
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}