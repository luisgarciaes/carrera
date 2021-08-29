const avanzar = () => {
    let result = 0;
    result = Math.floor((Math.random() * 6) + 1);
    let moves = 0;
    if (result === 3) {
        moves = 1;
    }else if(result > 3){
        moves=2
    }else{
        moves=3;
    }
    return moves;
};
const carrera = () =>{
    let playerA = 0;
    let playerB = 0;
    let result;
    while (true) {
        playerA += avanzar();
        console.log("El jugador A avanza hasta " + playerA)
        playerB += avanzar()
        console.log("El jugador B avanza hasta " + playerB)
        if(playerA >= 100 && playerB >= 100){
            result= "empate"
            break;
        }else if(playerA >= 100 || playerB >= 100){
            if(playerA > playerB){
            result="JUGADOR A GANA!"
            break;
            }else{
            result="JUGADOR B GANA!"
            break;}
        }
    }
    return result;
}
