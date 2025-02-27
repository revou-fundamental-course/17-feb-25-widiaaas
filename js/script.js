document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Auto-slide setiap 3 detik
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    document.getElementById("nextSlide").addEventListener("click", function () {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    document.getElementById("prevSlide").addEventListener("click", function () {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Mulai auto-slide saat halaman dimuat
    showSlide(currentIndex);
    startAutoSlide();


    // Form Validation
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const purpose = document.getElementById("interest").value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.match(emailPattern)) {
            alert("⚠️ Harap masukkan email yang valid.");
            return;
        }

        if (!name || !email || !purpose) {
            alert("⚠️ Harap isi semua kolom.");
            return;
        }

        form.reset();
        formMessage.classList.remove("hidden");
        formMessage.textContent = "✅ Terima kasih! Pesan Anda telah terkirim.";
    });
});
