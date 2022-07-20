var listaDeVideos = []
function play(){
    var url = document.getElementById("url").value;
    var elementoListaVideos = document.getElementById("videos")

    var ajeitandoUrl= url.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
 
    if (ErroDeVideosRepetidos(ajeitandoUrl) == -1) {
    
        listaDeVideos.push(ajeitandoUrl)
        mostrarVideosNaLista(elementoListaVideos,ajeitandoUrl)
        
    } else {
        alert("este video ja foi adicionado")

    }
}
function ErroDeVideosRepetidos(urlVideos) {
    return listaDeVideos.indexOf(urlVideos)
} 
function mostrarVideosNaLista(elementoListaVideos,urlVideos) {
    return elementoListaVideos.insertAdjacentHTML("afterbegin", `<h3>Video<h3><iframe class="configVideo" width="350" height="215" src="${urlVideos}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `)
}