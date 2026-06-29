// script.js - Live Makeover Host Interactivity

document.addEventListener("DOMContentLoaded", function () {
  // ================= 1. DETAIL MODAL HANDLER =================
  const detailButtons = document.querySelectorAll(".detail-btn");
  const plantModalElement = document.getElementById("plantModal");

  if (plantModalElement) {
    const plantModal = new bootstrap.Modal(plantModalElement);
    const modalTitle = document.getElementById("plantModalLabel");
    const modalDescription = document.getElementById("plantDescription");

    detailButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const plantName = this.getAttribute("data-plant");
        const plantDesc = this.getAttribute("data-desc");

        modalTitle.textContent = "Detail Tema Style: " + plantName;
        modalDescription.textContent = plantDesc;

        plantModal.show();
      });
    });
  }

  // ================= 2. CONTACT FORM HANDLER =================
  const contactForm = document.getElementById("contactForm");
  const successAlert = document.getElementById("successAlert");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm && successAlert && submitBtn) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Disable button and show sending state
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Mengirim...';

      // Simulate sending process (1 second)
      setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Kirim Pesan";

        // Show success alert
        successAlert.classList.remove("d-none");

        // Reset form inputs
        contactForm.reset();

        // Hide alert after 5 seconds
        setTimeout(function () {
          successAlert.classList.add("d-none");
        }, 5000);
      }, 1000);
    });
  }

  // ================= 3. BACK TO TOP BUTTON =================
  const btnBackTop = document.createElement("button");
  btnBackTop.id = "btnBackTop";
  btnBackTop.className = "btn btn-pink rounded-circle shadow border-0 d-flex align-items-center justify-content-center text-white";
  btnBackTop.style.width = "45px";
  btnBackTop.style.height = "45px";
  btnBackTop.style.position = "fixed";
  btnBackTop.style.bottom = "35px";
  btnBackTop.style.right = "35px";
  btnBackTop.style.display = "none";
  btnBackTop.style.zIndex = "1000";
  btnBackTop.innerHTML = '<i class="bi bi-arrow-up"></i>';

  document.body.appendChild(btnBackTop);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btnBackTop.style.display = "block";
    } else {
      btnBackTop.style.display = "none";
    }
  });

  btnBackTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
