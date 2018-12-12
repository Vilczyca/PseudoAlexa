window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const ALEXA = new SpeechRecognition();
const przycisk = document.querySelector('input');

//ALEXA.start uruchamia nasłuchiwanie
przycisk.addEventListener('click', ()=>ALEXA.start() )
ALEXA.addEventListener('result', function(e){
    console.log("Wiem co powiedziałeś")
    console.dir(e)
});