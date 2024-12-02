document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".close");
  const prevArrow = document.getElementById("prev");
  const nextArrow = document.getElementById("next");

  const galleryItems = document.querySelectorAll(".gallery-item");
  let currentIndex = 0;

  // Ensure modal is hidden initially
  modal.style.display = "none";

  const openModal = (index) => {
    modal.style.display = "flex"; // Open modal when an image is clicked
    modalImage.src = galleryItems[index].src;
    document.body.classList.add("modal-open");
    currentIndex = index;
  };

  const closeModal = () => {
    modal.style.display = "none"; // Close modal when clicking close button or backdrop
    document.body.classList.remove("modal-open");
  };

  const showNextImage = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length; // Loop to first image
    modalImage.src = galleryItems[currentIndex].src;
  };

  const showPrevImage = () => {
    currentIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length; // Loop to last image
    modalImage.src = galleryItems[currentIndex].src;
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openModal(index)); // Open modal on image click
  });

  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(); // Close modal if clicking outside of image
  });

  nextArrow.addEventListener("click", showNextImage);
  prevArrow.addEventListener("click", showPrevImage);

  window.addEventListener("keydown", (e) => {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "Escape") closeModal();
    }
  });
});
