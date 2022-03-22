import Glide from "./node_modules/@amcharts/amcharts4/maps";

let vw;
let cardsNo;
resize();

Window.alert("Site under development");

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

    console.log(vw);

    if (vw < 800) {
        cardsNo = 5;
    } else if (vw < 1300) {
        cardsNo = 7;
        console.log("switch");
    } else {
        cardsNo = 11;
    }
}
