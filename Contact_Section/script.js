
/* =====================================================
   SAFEEDGE APARTMENTS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", function () {

        mobileNav.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("open")) {

            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation"
            );

        } else {

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        }
    });


    /* Close menu when a link is clicked */

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );
        });

    });

}

