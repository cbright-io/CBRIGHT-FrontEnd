const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const marqueeStrategyElementsDisplayed = getComputedStyle(
    root
).getPropertyValue("--marquee-strategy-elements-displayed");

const marqueeStrategyContent = document.querySelector(
    "ul.marquee-strategy-content"
);

root.style.setProperty(
    "--marquee-strategy-elements",
    marqueeStrategyContent.children.length
);

for (let i = 0; i < marqueeStrategyElementsDisplayed; i++) {
    marqueeStrategyContent.appendChild(
        marqueeStrategyContent.children[i].cloneNode(true)
    );
}
