
let amigos=[];

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();
    
    if (nombre !== "" && nombre.match(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/)){
        for(let i = 0; i < amigos.length; i++){
            if (equalsIgnoreCase(nombre, amigos[i])){
                alert('Ya ingresaste este nombre, por favor ingresa otro');
                return;
            }
        }
        amigos.push(nombre);
        limpiarCaja();
        actualizarLista();
        console.log(amigos);
    } else {
        if(!nombre.match(/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/)){
            alert('Por favor, ingrese solo letras o espacios.');
        }
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;

        lista.appendChild(li);
    });
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    if(!(amigos.length <= 1)){
        let indiceSorteo = Math.floor(Math.random()*amigos.length);
        resultado.innerHTML = ` ¡${amigos[indiceSorteo]} es el amigo secreto! `; 
    } else {
        alert(amigos < 1 ? 'Por favor agrega amigos a la lista' : 'Por favor agrega mas a migos a la lista');
    }
}

function equalsIgnoreCase(cadena1, cadena2){
    return cadena1.toLowerCase() === cadena2.toLowerCase();
}

function reiniciarAplicacion(){
    amigos = [];
    actualizarLista();
    const resultado = document.getElementById('resultado');
    if (resultado) {
        resultado.innerHTML = '';
    }
}
document.getElementById('reinicio').onclick = reiniciarAplicacion;