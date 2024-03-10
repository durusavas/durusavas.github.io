document.addEventListener("DOMContentLoaded", () => {
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = document.querySelectorAll(
    ".education-detail, .project-detail, .certificate-detail"
  );

  let currentImageIndex = 0;
  const images = document.querySelectorAll(".image-gallery img");

  function changeImage() {
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add("active");
  }

  // Change image every 3 seconds
  setInterval(changeImage, 2000);

  elements.forEach((element) => observer.observe(element));

  // Select the certificates container
  const certificatesContainer = document.querySelector(".certificates-scroll");

  // Function to start the infinite scroll
  function startInfiniteScroll() {
    let currentScrollPosition = 0;
    const speed = 0.5; // Adjust this to make the scroll faster or slower
    const totalWidth = certificatesContainer.scrollWidth + 500; // Adjust based on your content size

    function scrollCertificates() {
      currentScrollPosition += speed;

      // Scroll to the new position
      certificatesContainer.scrollTo(currentScrollPosition, 0);

      // If we've reached the end, loop back to the start
      if (currentScrollPosition >= totalWidth) {
        currentScrollPosition = 0; // Reset scroll position
      }

      // Use requestAnimationFrame for smooth scrolling
      requestAnimationFrame(scrollCertificates);
    }

    scrollCertificates();
  }

  // Check if the certificates container exists and start the infinite scroll
  if (certificatesContainer) {
    startInfiniteScroll();
  }
});
