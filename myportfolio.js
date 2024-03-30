// block to change the letters one by one
let changeText = document.getElementById("change-text")
let wordsArr = ["Web-Developer", "Product-Designer"]
let currentLetterIndex = 0
let currentWordIndex = 0
let typingSpeed = 100

function typeLetters(){
    if (currentLetterIndex < wordsArr[currentWordIndex].length){
        changeText.innerText += wordsArr[currentWordIndex][currentLetterIndex]
        currentLetterIndex++
        setTimeout(typeLetters, typingSpeed)
    }else{
        setTimeout(clearLetters,typingSpeed)
    }
}
function clearLetters(){
    if(changeText.innerText){
        changeText.innerText = changeText.innerText.slice(0, -1)
        setTimeout(clearLetters, typingSpeed)
    }else{
        currentWordIndex = (currentWordIndex + 1) % wordsArr.length
        currentLetterIndex = 0
        setTimeout(typeLetters, typingSpeed)
    }
}
typeLetters()

// block to open the nav dropdown for responsiveness
let myDropDown = document.getElementById("hidden-dd")
let myHamburger = document.getElementById("hamburger")
let myLogo = document.getElementById("logo")
let myMoon = document.getElementById("moon")
let myNav = document.getElementById("nav")
let close = document.getElementById("close")

function openDropDown() {
    let dropdownStyle = window.getComputedStyle(myDropDown)
    if (dropdownStyle.display === "none") {
        myDropDown.style.display = "block"
        myHamburger.style.display = "none"
        // myLogo.style.display = "none"
        myMoon.style.display = "none"
        myNav.style.padding = "0"
    } else {
        myDropDown.style.display = "none";
        myHamburger.style.display = "block"
        // myLogo.style.display = "block"
        myMoon.style.display = "block"
    }
}
// block to close the nav dropdown for responsiveness

function closeDropDown(){
    if(myDropDown.style.display === "block"){
        myDropDown.style.display = "none"
        myNav.style.padding = "1.5rem 2rem 1.5rem 2rem"
        myHamburger.style.display = "block"
        // myLogo.style.display = "block"
        myMoon.style.display = "block"
    } else{
        myDropDown.style.display = "block"
    }
}
//stop hambruger from showing on big screens
function keepHamburgerout() {
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        myHamburger.style.display = "block";
        myNav.style.padding = "1.5rem 2rem 1.5rem 2rem"
    } else if(window.innerWidth > 480 && window.innerWidth <= 768) {
        myHamburger.style.display = "block";
        myNav.style.padding = "1.5rem"
    } else{
        myHamburger.style.display = "none";
        myNav.style.padding = "1.5rem 5rem 1.5rem 5rem"
    }
}

window.addEventListener("resize", keepHamburgerout);
keepHamburgerout(); 

//open resume
let viewBtn =document.getElementById("view-btn")

function openResume(){
    window.open("portfolio images and icon/Badmus Tech CV.pdf", "_blank")
}

//chnage to lightmode
