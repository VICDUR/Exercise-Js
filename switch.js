
function piedraPapelTijera (){
    var jugador = prompt("Ingrese una de las opciones:  -Piedra -Papel -Tijera").toLowerCase();
    var opciones = ["piedra", "papel", "tijeras"];
    var computador = opciones[Math.floor(Math.random() * 3)];

    if(jugador === "piedra" || jugador === "papel" || jugador === "tijera"){

                switch (true) { 
                    case (jugador === computador):
                        console.log("Empate, computador escogio: " + computador);
                        break;
                    case (jugador === "piedra" && computador === "tijera" || jugador === "tijera" && computador 
                        === "papel" || jugador === "papel" &&  computador === "piedra"):
                        console.log("Ganaste, computador escogio: " + computador);
                        break;
                
                    
                    default:
                        alert("Perdiste: computador escogio " + computador);
        
                }

            } else{
        alert("ese elemento no existe, escribe bien");
        
    }
}

console.log(piedraPapelTijera());