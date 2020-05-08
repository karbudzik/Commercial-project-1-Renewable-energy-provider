// BURGER MENU:

const burger = document.querySelector(".burgermenu"),
      navigation = document.querySelector(".mobile-navigation"),
      property = navigation.style.display;

burger.addEventListener("click", function() {
    if (window.getComputedStyle(navigation).display == "block") {
        navigation.style.setProperty("display", "none");
        burger.style.setProperty("background", "url(img/burgermenu.svg) center no-repeat");
    } else if (window.getComputedStyle(navigation).display == "none") {
        navigation.style.setProperty("display", "block");
        burger.style.setProperty("background", "url(img/burgercross.svg) center no-repeat");
    }
});

// IMAGE GALLERY:

const gallery = Array.from(document.querySelectorAll(".gallery")),
      overlay = document.querySelector(".overlay"),
      overlayClose = overlay.querySelector(".close"),
      overlayImage = overlay.querySelector('img');

function handleClick(e) {
    const src = e.currentTarget.src;
    overlayImage.src = src;
    overlay.classList.add("open");
}

gallery.forEach(item => item.addEventListener("click", handleClick));

function close() {
    overlay.classList.remove("open")
}

overlayClose.addEventListener("click", close);
