import Glide from "@glidejs/glide";

let vw;
let cardsNo;
resize();

alert("Site under development");

var glideMulti1 = new Glide(".multi1", {
    type: "carousel",
    autoplay: 3500,
    perView: 7,
});

glideMulti1.mount();

function resize() {
    vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );

    if (vw < 800) {
        cardsNo = 5;
    } else if (vw < 1300) {
        cardsNo = 7;
    } else {
        cardsNo = 11;
    }
}
