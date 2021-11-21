
function piedraPapelTijera (){
    var jugador = prompt("Ingrese una de las opciones:  -Piedra -Papel -Tijera").toLowerCase();
    var opciones = ["piedra", "papel", "tijeras"];
    var computador = opciones[Math.floor(Math.random() * 3)];

    switch (true) {
        case (jugador != "piedra".toLowerCase || jugador != "papel".toLowerCase || jugador != "tijera".toLowerCase):
            alert("ese elemento no existe, escribe bien");
            break;   
        case (jugador === computador):
            console.log("Empate, computador escogio: " + computador);
            break;
        case (jugador === "piedra" && computador === "tijera" || jugador === "tijera" && computador 
            === "papel" || jugador === "papel" &&  computador === "piedra"):
            console.log("Ganaste, computador escogio: " + computador);
            break;
    
        
        default:
            alert("Perdiste: jugador escogio " + jugador);
        
    }

} 
console.log(piedraPapelTijera());