/** @format */


const headlines = document.getElementById("partner-carousel");
const links = document.getElementsByClassName(".partner-carousel-content");
let left = headlines.offsetLeft;

const animationID;


moveHeadlines();
stopTicker();


function moveHeadlines() {
    moveTop();
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

function getElementProp(element) {
    var breakdown = linksB[element].getBoundingClientRect();
    return breakdown.width;
}

function moveTop() {
    left--;
    if (left <= -links[0].offsetWidth) {
        headlines.appendChild(links[0]);
        left = 0;
    }
    headlines.style.left = left + "px";
}

