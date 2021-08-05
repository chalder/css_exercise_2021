let imgArray = [
    "https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    "https://images.unsplash.com/photo-1528501028382-e587fcf3a03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592757685752-d4af714bd274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80",
    "https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
    "https://images.unsplash.com/photo-1584902645120-f86567d892b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
];


const leftArrowEle = document.querySelector(".arrow.left");
const rightArrowEle = document.querySelector(".arrow.right");
const carCardEle = document.querySelectorAll(".car-card img");
const carouselDotEle = document.querySelectorAll(".carousel-dots span");
let currentCarouselIndex = 0;
const maxCarouselIndex = 2;
let curImgArrayStart = 0,
    curImgArrayEnd = 3,
    maxImgArrayStart = imgArray.length - 3;
let currentImgArray = imgArray.slice(curImgArrayStart, curImgArrayEnd);


leftArrowEle.addEventListener('click', () => {
    updateCurrentImgArray('left');
    updateCarCards();
    updateCarouselIndex('left');
    updateDots(carouselDotEle[currentCarouselIndex]);
});

rightArrowEle.addEventListener('click', () => {
    updateCurrentImgArray('right');
    updateCarCards();
    updateCarouselIndex('right');
    updateDots(carouselDotEle[currentCarouselIndex]);
});

carouselDotEle.forEach(ele => {
    ele.addEventListener('click', (ele) => {
        updateDots(ele.target);
        updateCarouselWindow(ele.target.classList[0]);
        updateCarCards();
    })
})

const updateCurrentImgArray = (dir) => {
    if (dir === "left") {
        if (curImgArrayStart > 0) {
            curImgArrayStart -= 3;
            curImgArrayEnd -= 3;
        } else {
            curImgArrayStart = 6
            curImgArrayEnd = 9;
        }
    } else if (dir === "right") {
        if (curImgArrayStart < maxImgArrayStart) {
            curImgArrayStart += 3;
            curImgArrayEnd += 3;
        } else {
            curImgArrayStart = 0
            curImgArrayEnd = 3;
        }
    }
    currentImgArray = [];
    currentImgArray = imgArray.slice(curImgArrayStart, curImgArrayEnd);
}

const updateDots = (ele) => {
    carouselDotEle.forEach(item => {
        item.classList.remove("solid-circle");
    })
    ele.classList.add("solid-circle");
}

const updateCarouselIndex = (dir) => {
    if (dir === 'right') {
        if (currentCarouselIndex < maxCarouselIndex) {
            currentCarouselIndex++;
        } else {
            currentCarouselIndex = 0;
        }
    } else if (dir === 'left') {
        if (currentCarouselIndex > 0) {
            currentCarouselIndex--;
        } else {
            currentCarouselIndex = 2;
        }
    }
}

const updateCarCards = () => {
    carCardEle.forEach((ele, idx) => {
        ele.src = currentImgArray[idx];
    });
}

const updateCarouselWindow = (dot) => {
    switch (dot) {
        case "first-dot":
            curImgArrayStart = 0;
            curImgArrayEnd = 3;
            currentCarouselIndex = 0;
            break;
        case "second-dot":
            curImgArrayStart = 3;
            curImgArrayEnd = 6;
            currentCarouselIndex = 1;
            break;
        case "third-dot":
            curImgArrayStart = 6;
            curImgArrayEnd = 9;
            currentCarouselIndex = 2;
            break;
    }
    currentImgArray = [];
    currentImgArray = imgArray.slice(curImgArrayStart, curImgArrayEnd);
}