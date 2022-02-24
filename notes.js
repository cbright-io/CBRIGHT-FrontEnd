const headlines = document.getElementsByClassName("partner-carousel-content");
var links = document.getElementsByClassName("partner-logo");

let left = 0;
let animationID;

console.log(left);
console.log(links[0]);

moveHeadlines();
stopTicker();

console.log("left: ", left, "leftB: ", leftB);

function moveHeadlines() {
    moveTop();
    moveBottom();

    animationID = requestAnimationFrame(moveHeadlines);
}

function stopTicker() {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", function () {
            cancelAnimationFrame(animationID);
        });
        links[i].addEventListener("mouseleave", function () {
            moveHeadlines();
        });
    }
}

function moveTop() {
    left--;
    if (left <= -links[0].offsetWidth) {
        headlines.appendChild(links[0]);
        left = 0;
    }
    console.log(left);
    console.log(headlines.style.left);
    headlines.style.left = left + "px";
}
