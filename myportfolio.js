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


function changeToDarkMode(){
    
}