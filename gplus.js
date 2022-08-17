var listaDeVideos = ['']

function play(){
    var url = document.getElementById("url").value;
    var elementoListaVideos = document.getElementById("videos")
    var novaUrl=ajeitandoUrl(url)
 
    if (ErroDeVideosRepetidos(novaUrl) == -1) {

        listaDeVideos.push(novaUrl)
        mostrarVideosNaLista(elementoListaVideos,novaUrl)
        layoutAdicionarVideo()
    } else {
        alert("[ERRO] este video não pode ser adicionado")
    }
}
function ErroDeVideosRepetidos(urlVideos) {
    return listaDeVideos.indexOf(urlVideos)
} 
function mostrarVideosNaLista(elementoListaVideos,urlVideos) {
    return elementoListaVideos.insertAdjacentHTML("afterbegin", `<iframe class="configVideo" width="350" height="215" src="${urlVideos}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `)
}
function layoutAdicionarVideo(){
  const elementoBordarPlayer = document.querySelector('section#bordarPlayer')

  elementoBordarPlayer.className==='bordarPlayerAberta'? elementoBordarPlayer.className='bordarPlayerFechada':elementoBordarPlayer.className='bordarPlayerAberta'
}

function ajeitandoUrl(url) {
    var urlFoco = url
    var posicao= urlFoco.search("https://youtu.be/")
    if (posicao==-1) {
        posicao= urlFoco.search("https://www.youtube.com/")

        if (posicao==-1) {
            alert("este video não é do youtube")
        }else{
            return url.replace('https://www.youtube.com/', 'https://www.youtube.com/embed/');
        }
    }else{
        return url.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
    }
}