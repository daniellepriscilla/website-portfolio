// MOBILE MENU

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

const menuOpenIcon = document.getElementById("menu-open-icon");
const menuCloseIcon = document.getElementById("menu-close-icon");

const mobileLinks = document.querySelectorAll(".mobile-link");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        menuOpenIcon.classList.toggle("hidden");
        menuCloseIcon.classList.toggle("hidden");

    });


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            menuOpenIcon.classList.remove("hidden");
            menuCloseIcon.classList.add("hidden");

        });

    });

}