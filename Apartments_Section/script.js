
const apartmentVideos = document.querySelectorAll(
    ".full-apartment-image video"
);

apartmentVideos.forEach(video => {

    const container = video.closest(".full-apartment-image");

    container.addEventListener("mouseenter", () => {
        video.play();
    });

    container.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});

