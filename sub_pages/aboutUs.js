import Glide from "@glidejs/glide";

var glideMulti1 = new Glide(".multi1", {
    type: "carousel",
    autoplay: 6000,
    perView: 2,
});

glideMulti1.mount();
