// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function showContent(paper) {
    // Show content of the given paper
    paper.querySelector(".front-content").style.opacity = 1;
    paper.querySelector(".back-content").style.opacity = 1;
}

function hideContent(paper) {
    // Hide content of the given paper
    paper.querySelector(".front-content").style.opacity = 0;
    paper.querySelector(".back-content").style.opacity = 0;
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                showContent(paper1);
                hideContent(paper2);
                hideContent(paper3);
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                showContent(paper2);
                hideContent(paper1);
                hideContent(paper3);
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                showContent(paper3);
                hideContent(paper1);
                hideContent(paper2);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                showContent(paper1);
                hideContent(paper2);
                hideContent(paper3);
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                showContent(paper2);
                hideContent(paper1);
                hideContent(paper3);
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                showContent(paper3);
                hideContent(paper1);
                hideContent(paper2);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}
