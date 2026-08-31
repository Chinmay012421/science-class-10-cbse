/* =========================
MOBILE MENU
========================= */

function toggleMenu() {

```
const nav = document.getElementById("navLinks");

nav.classList.toggle("active");
```

}

/* =========================
NOTIFICATION
========================= */

function showMessage(message) {

```
const notification =
    document.getElementById("notification");

notification.textContent = message;

notification.classList.add("show");

setTimeout(() => {

    notification.classList.remove("show");

}, 2500);
```

}

/* =========================
CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

```
link.addEventListener("click", () => {

    document
        .getElementById("navLinks")
        .classList.remove("active");

});
```

});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(
".subject-card, .chapter-card, .gallery-item, .about-content"
);

const observer =
new IntersectionObserver(
entries => {

```
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);
```

revealElements.forEach(element => {

```
element.style.opacity = "0";

element.style.transform =
    "translateY(35px)";

element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

observer.observe(element);
```

});

/* =========================
NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

```
const header =
    document.querySelector("header");

if (window.scrollY > 50) {

    header.style.background =
        "rgba(3, 8, 17, 0.96)";

} else {

    header.style.background =
        "rgba(5, 11, 22, 0.85)";

}
```

});
