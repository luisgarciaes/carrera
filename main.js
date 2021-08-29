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
    let player1 = 0;
    let player2 = 0;
    let result;
    while (true) {
        player1 += avanzar();
        console.log("El jugador uno avanza hasta " + player1)
        player2 += avanzar()
        console.log("El jugador dos avanza hasta " + player2)
        if(player1 >= 20 && player2 >= 20){
            result= "empate"
            break;
        }else if(player1 >= 20 || player2 >= 20){
            if(player1>player2){
            result="player1 wins"
            break;
            }else{
            result="player2 wins"
            break;}
        }
    }
    return result;
}
