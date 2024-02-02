const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const tryAgain = document.querySelector("#tryAgain")

const fortune = [
    "A vida trará coisas boas se tiver paciência.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "Se você se sente só é porque construiu muros ao invés de pontes.",
  ]




fortuneCookie.addEventListener('click', handleTryClick)
tryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        handleTryClick()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
        }

        
    }
)



function handleTryClick(event) {
    toggleScreen()
    pickFortune()
    
}

function handleResetClick() {
toggleScreen()
}


function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("h2").innerText = `${fortune[randomNumber]}`
}


function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}