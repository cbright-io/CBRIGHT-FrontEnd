import Glide from "@glidejs/glide";
console.log("hello");

window.addEventListener("load", () => {
    const glide = new Glide(".glide", {
        type: "carousel",
        touchAngle: 45,
        focusAt: 1,
        startAt: 1,
        perView: 5.5,
        keyboard: true,
        gap: 50,
        autoplay: false,
        peek: {
            before: 100,
            after: 50,
        },
    });

    glide.mount();
});
