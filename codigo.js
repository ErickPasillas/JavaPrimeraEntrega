

let player;
let pc;


function aleatoria(){
    return Math.cell(Math.random()*3)
}

player = prompt(Elija: 1 - Piedra, 2 - Papel, 3 - Tijera)
pc = aleatoria();
alert("Elegiste": + eleccion(player))
alert("Pc Eligio": + eleccion(pc))

if(player == pc){
    alert("Empate")
} else if(player==1 && pc==3){
    alert("Ganaste")
} else if(player==2 && pc==1){
    alert("Ganaste")
} else if(player==3 && pc==2){
    alert("Ganaste")
} else{
    alert("Perdiste")
}

function eleccion(juego){
    let resultado = ""
    if (jugada == 1 ){
        resultado = "Piedra 🥌"
    } else if (jugada == 2){
        resultado = "Papel 🧻"
    }    else if (jugada == 3){
            resultado = "Tijera ✂"
        } else {
            resultado = "Tu eleccion es incorrecta"
        }
    }
    return resultado
}