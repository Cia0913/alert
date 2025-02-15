let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;
const noTexts = [
    "妳要確欸", 
    "口是心非喔", 
    "幹嘛選這個 ", 
    "妳幹嘛",
    "反正妳等等就按不到了哈哈哈"
];

noButton.addEventListener("click", function() {
    clickCount++;

    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    let moveUp = clickCount * 25; 
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    if (clickCount === 1) mainImage.src = "images/shocked.png"; 
    if (clickCount === 3) mainImage.src = "images/angry.png"; 
    if (clickCount === 4) mainImage.src = "images/crying.png"; 
    if (clickCount >= 5) mainImage.src = "images/crying.png";  
});

// 點擊 Yes 直接跳轉到 YouTube
yesButton.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=kTu7b5KqwWA";
});
