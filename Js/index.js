// اسکریپت مربوط به اسلایدر بازی ها
document.addEventListener("DOMContentLoaded", function () {
    const gamesTrack = document.getElementById("games-track");
    const gamesPrevBtn = document.getElementById("g-prev-btn");
    const gamesNextBtn = document.getElementById("g-next-btn");

    if (gamesTrack && gamesPrevBtn && gamesNextBtn) {
        // مقدار اسکرول با هر بار کلیک (برابر با عرض یک کارت + فاصله)
        const scrollAmount = 250;

        // دکمه راست (رفتن به آیتم های قبلی در سایت فارسی)
        gamesPrevBtn.addEventListener("click", () => {
            gamesTrack.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // دکمه چپ (رفتن به آیتم های بعدی در سایت فارسی)
        gamesNextBtn.addEventListener("click", () => {
            gamesTrack.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    // ۱. افکت شیشه‌ای هدر هنگام اسکرول
    const header = document.getElementById("site-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled"); // اضافه کردن هاله شیشه‌ای
        } else {
            header.classList.remove("scrolled"); // حذف هاله شیشه‌ای در بالای صفحه
        }
    });

    // ۲. باز و بسته شدن منوی موبایل (دکمه همبرگری)
    document.addEventListener("DOMContentLoaded", function () {
        // گرفتن دکمه همبرگر و تگ nav
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const mobileNav = document.querySelector("nav"); // پیدا کردن تگ nav

        if (hamburgerBtn && mobileNav) {
            hamburgerBtn.addEventListener("click", function () {
                // اضافه و حذف کردن کلاس active برای باز و بسته شدن منو
                mobileNav.classList.toggle("active");
                hamburgerBtn.classList.toggle("active");
            });
        }
    });
});
