let vw;
let cardsNo;
resize();


var glideMulti1 = new Glide(".multi1", {
    type: "carousel",
    autoplay: 3500,
    perView: 9,
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

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
