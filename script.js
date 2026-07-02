// script.js - Live Makeover Host Interactivity (Tanpa Bootstrap)

document.addEventListener("DOMContentLoaded", function () {
  
  // ================= 1. DYNAMIC TIME & GREETING HANDLER =================
  function updateDateTimeGreeting() {
    const greetingContainer = document.getElementById("dateTimeGreeting");
    if (!greetingContainer) return;

    const now = new Date();
    const hours = now.getHours();
    let greeting = "Selamat malam";

    if (hours >= 5 && hours < 11) {
      greeting = "Selamat pagi";
    } else if (hours >= 11 && hours < 15) {
      greeting = "Selamat siang";
    } else if (hours >= 15 && hours < 18) {
      greeting = "Selamat sore";
    }

    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    greetingContainer.innerHTML = `
      <div class="greeting-text">${greeting}</div>
      <div class="date-text">${dayName}, ${date} ${monthName} ${year}</div>
    `;
  }

  // Jalankan segera saat halaman dibuka
  updateDateTimeGreeting();

  // Update berkala setiap menit untuk memastikan ketepatan waktu
  setInterval(updateDateTimeGreeting, 60000);


  // ================= 2. CONTACT FORM HANDLER =================
  const contactForm = document.getElementById("contactForm");
  const successAlert = document.getElementById("successAlert");
  const submitBtn = document.getElementById("submitBtn");

  if (contactForm && successAlert && submitBtn) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Nonaktifkan tombol kirim & ubah status
      submitBtn.disabled = true;
      submitBtn.textContent = "Mengirim...";

      // Simulasikan proses pengiriman formulir (1 detik)
      setTimeout(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = "Kirim Request Makeover";

        // Tampilkan notifikasi sukses kustom
        successAlert.classList.remove("d-none");

        // Reset semua field form inputan
        contactForm.reset();

        // Sembunyikan kembali notifikasi sukses setelah 5 detik
        setTimeout(function () {
          successAlert.classList.add("d-none");
        }, 5000);
      }, 1000);
    });
  }


  // ================= 3. BACK TO TOP BUTTON =================
  const btnBackTop = document.createElement("button");
  btnBackTop.id = "btnBackTop";
  btnBackTop.className = "back-to-top";
  
  // Custom Styling via JS agar mudah
  btnBackTop.style.width = "45px";
  btnBackTop.style.height = "45px";
  btnBackTop.style.position = "fixed";
  btnBackTop.style.bottom = "35px";
  btnBackTop.style.right = "35px";
  btnBackTop.style.backgroundColor = "#ff477e";
  btnBackTop.style.color = "#ffffff";
  btnBackTop.style.border = "none";
  btnBackTop.style.borderRadius = "50%";
  btnBackTop.style.cursor = "pointer";
  btnBackTop.style.display = "none";
  btnBackTop.style.zIndex = "1000";
  btnBackTop.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
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
      behavior: "smooth"
    });
  });

});
