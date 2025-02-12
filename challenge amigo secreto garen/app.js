// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var maxAmigos = 10;
function agregarAmigo() {
    var input = document.getElementById('amigo');
    var amigoNombre = input.value.trim();
    
    if (amigoNombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    if (!isNaN(amigoNombre)) {
        alert('El nombre no puede ser un número. Por favor, ingresa un nombre válido.');
        return;
    }
    
    var lista = document.getElementById('listaAmigos');
    var amigos = lista.getElementsByTagName('li');

    
    if (amigos.length >= maxAmigos) {
        alert('Has alcanzado el máximo de ' + maxAmigos + ' amigos.');
        return;
    }
    
    var listItem = document.createElement('li');
    listItem.textContent = amigoNombre;
    lista.appendChild(listItem);
    
    input.value = '';
}

function sortearAmigo() {
    var lista = document.getElementById('listaAmigos');
    var amigos = lista.getElementsByTagName('li');
    
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para seleccionar.');
        return;
    }
    
    var randomIndex = Math.floor(Math.random() * amigos.length);
    var amigoSeleccionado = amigos[randomIndex].textContent;
    var resultado = document.getElementById('resultado');
    resultado.textContent = 'Amigo seleccionado: ' + amigoSeleccionado;
}