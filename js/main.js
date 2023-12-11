document.addEventListener('DOMContentLoaded',function(){
    //punto 2
    console.log('Contenido del DOM cargado')

    const contenidoInicial = 'Este contenido está listo para ser editado y pasarlo abajo.';
    document.getElementById('origen').value = contenidoInicial;

    document.getElementById('origen').addEventListener('input', () => {
        document.querySelectorAll('input[type="button"], button').forEach(btn => btn.disabled = false);
    });

    const aplicarHTML = (texto) => {
        return '<p>' + texto.replace('está listo', '<strong>está listo</strong>').replace('para ser editado y pasarlo abajo.', 'para ser editado y pasarlo abajo.<br>') + '</p>';
    };


    
})