window.onload = function () {

    fetch('https://api.giphy.com/v1/gifs/trending?api_key=Azmm3FyGs9gLJ3SxTBqiMHh7pBV3SgZ2&limit=25&rating=g')


        // primer .then para obtener todos los gifs dentro de un formato Json
        .then(function (respuesta) {
            return respuesta.json();

        })
        // segundo .then para utilizar la informacion obtenida y mostrarla, en este caso mostrare la imagen y el titulo del gif
        .then(function (informacion) {
            console.log(informacion.data)

            for (let i = 0; i < informacion.data.length; i++) {

                let title = '<h1>' + informacion.data[i].title + '</h1>';
                let images = '<img src=' + informacion.data[i].images.original.url + '>'

                document.querySelector('ul').innerHTML += '<li>' + images + title + '</li>'

                // agregando estilos 
                let titulo = document.querySelector('.titulo')
                titulo.style.color = 'blue';
                titulo.style.textAlign = 'center';


                const reload = document.getElementById('reload');


// boton de recarga 
reload.addEventListener('click', function() { 
  location.reload();
});

            }

            // anticipandome a cualquier error 
        }).catch(function (e) {
            alert('Error: intente mas tarde');
        })

};

