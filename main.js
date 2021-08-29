let playerA = 0;
let playerB = 0;
let result;


const avanzar = () => {
    let random = 0;
    random = Math.floor((Math.random() * 6) + 1);
    let moves = 0;
    if (random === 3) {
        moves = 1;
    }else if(random > 3){
        moves=2
    }else{
        moves=3;
    }
    return moves;
};
const checkWinner = () =>{
    if(playerA >= 100 && playerB >= 100){
        result= "Es un empate"
    }else if(playerA >= 100 || playerB >= 100){
        if(playerA > playerB){
        result="JUGADOR A GANA!"
        }else{
        result="JUGADOR B GANA!"}
    }   
}
const carrera = () =>{

    checkWinner()
    playerA += avanzar();
    console.log("El jugador A avanza hasta " + playerA)
    playerB += avanzar()
    console.log("El jugador B avanza hasta " + playerB)
    return result;
}
const move = () => {
    let elemA = document.getElementById("barA");   
    let elemB = document.getElementById("barB");   
    let widthA = playerA;
    let widthB = playerB;
    elemA.style.width = widthA + '%';
    elemB.style.width = widthB + '%';
    elemA.innerHTML = widthA * 1  + '%'
    elemB.innerHTML = widthB * 1  + '%'
    console.log("what")
  }
document.getElementById("advanceBtn").addEventListener("click", carrera); 
document.getElementById("advanceBtn").addEventListener("click", move); 

