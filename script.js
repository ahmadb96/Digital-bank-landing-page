const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.getElementById("overlay");

    // باز و بسته کردن منو
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // کلیک روی فضای خالی -> بستن منو
    overlay.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
    });