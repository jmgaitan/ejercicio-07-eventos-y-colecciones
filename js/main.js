document.addEventListener('DOMContentLoaded', function() {
 
    function repeatContent(times) {
    const content = textarea.value;
        let newContent = '';
        for(let i = 0; i < times; i++) {
            newContent += i+1 + ')' + content + '<br>';
        }
        return newContent;
    }

    // punto 1: cargar el dom e informar por consola
    console.log("Contenido del DOM cargado");

    // punto 2: cargar textarea
    const textarea = document.getElementById('origen');
    textarea.value = 'Este contenido está listo\npara ser editado y pasarlo abajo.';


    textarea.addEventListener('input', function() {
        document.querySelectorAll('input[type=button], button').forEach(function(button) {
            button.disabled = false;
        });
    });

    // funcion de repetir contenido

    document.getElementById('btn-reemplazar').addEventListener('click', function() {
        document.getElementById('destino').innerHTML = textarea.value;
    });

    document.querySelectorAll('.btn-agregar').forEach(function(button) {
        button.addEventListener('click', function() {

            if(button.value === "Agregar n veces") {
                const n = parseInt(prompt("¿Cuántas veces quieres agregar el contenido?"), 10);
                if(n > 0) {
                    document.getElementById('destino').innerHTML += repeatContent(n);
                }
            } else {
                const times = parseInt(button.value.match(/\d+/), 10) || 1;
                document.getElementById('destino').innerHTML += repeatContent(times);
            }
        });
    });
    

    document.querySelector('.btn-vaciar').addEventListener('click', function() {
        document.getElementById('destino').innerHTML = '';
    });

    document.querySelector('.btn-convertir-a-mayusculas').addEventListener('click', function() {
        const destino = document.getElementById('destino');
        destino.innerHTML = destino.innerHTML.toUpperCase();
    });

    document.querySelector('button').addEventListener('click', function() {
        const destino = document.getElementById('destino');
        destino.innerHTML = destino.innerHTML.toLowerCase();
    });

    // punto 10 [Ok]
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function(li) {
        li.textContent = "[Ok] " + li.textContent;
    });
});
