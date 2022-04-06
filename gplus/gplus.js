function play(){
    var url = document.getElementById("url").value;
    var adcionarNaLista = document.getElementById("videos")

    url= url.replace('https://youtu.be/', 'https://www.youtube.com/embed/');

    adcionarNaLista.insertAdjacentHTML("afterbegin", `<iframe class="configVideo" width="350" height="215" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
}

