var listaDeAnimes = ["https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0273e80242d80b0218f640e038269c18.jpe", "https://preview.redd.it/new-bleach-thousand-year-blood-war-the-separation-key-v0-psqow88pnikb1.jpg?auto=webp&s=aa292cd5ed15ca438156c02f637a8db8e8f9a014", "https://i0.wp.com/heroisx.com/wp-content/uploads/2010/07/tengentoppagurrenlagann.jpg", "https://wp.radiojhero.com/wp-content/uploads/2022/03/uhdpapercom-download-hd-wallpaper-1920x1080-2821-c.jpg"];

var listaDeNomes = ["Black Clover", "Bleach", "Tengen Toppa Gurren Lagann", "Komi-San Wa Komyushou Desu"];

var listaDeTrailers = ["https://www.youtube.com/watch?v=ScKdFRBJhyY","https://www.youtube.com/watch?v=78WIYzX_m98","https://www.youtube.com/watch?v=oXkkMhCuCMg","https://www.youtube.com/watch?v=erF7lSzkTYA"]

var divPainel = document.querySelector(".painel");

function atualiza(){
  for(let i = 0; i < listaDeAnimes.length; i++){
  let imgContainer = document.createElement("div");
  let link = document.createElement("a");
  let img = document.createElement("img");
  let p = document.createElement("p");
  link.href = listaDeTrailers[i];
  link.target = "_blank";
  img.src = listaDeAnimes[i];
  p.innerText = listaDeNomes[i];
  link.appendChild(img);
  imgContainer.appendChild(link);
  imgContainer.appendChild(p);
  divPainel.appendChild(imgContainer);
  }
}

atualiza();

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

function isYoutubeVideo(trailer){
  return /^https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})$/.test(trailer);
}

function adicionarAnime(){
  var nome = document.querySelector("#inputNome").value;
  var url = document.querySelector("#inputUrl").value;
  var trailer = document.querySelector("#inputUrlTrailer").value;
  
  if(nome == "" || url == "" || trailer == ""){
    alert("Nome do Anime ou URLs Vazios! Impossível Adicionar.");
  }
  else{
    if(listaDeNomes.includes(nome) == true){
      alert("Esse anime já foi adicionado!");
      
    }else if(!isImage(url)){
      alert("URL da imagem Invalida! Digite uma URL com o Formato 'jpg' ou 'jpeg'");
      
    }else if(!isYoutubeVideo(trailer)){
      alert("URL do trailer Invalido! Digite uma URL como formato 'youtube.com'");
      
    }else{
      
        let imgContainer = document.createElement("div");
        let img = document.createElement("img");
        let link = document.createElement("a");
        let p = document.createElement("p");   
        img.src = url;       
        p.innerText = nome;
        link.href = trailer;
        link.target = "_blank";
        link.appendChild(img);
        imgContainer.appendChild(link);
        imgContainer.appendChild(p);           
        divPainel.appendChild(imgContainer);
        listaDeAnimes.push(url);
        listaDeNomes.push(nome);
        listaDeTrailers.push(trailer);
    }

  }
  document.querySelector("#inputNome").value = "";
  document.querySelector("#inputUrl").value = "";
  document.querySelector("#inputUrlTrailer").value = "";
}


function removerAnime(){
  var nomeToRemove = document.querySelector("#inputRemove").value;
  if(listaDeNomes.includes(nomeToRemove) == true){
    for(let i = 0; i < listaDeNomes.length; i++){
      if(listaDeNomes[i] == nomeToRemove){
        listaDeNomes = listaDeNomes.filter(item => item != nomeToRemove);
        listaDeAnimes = listaDeAnimes.filter(item => item != listaDeAnimes[i]);
        listaDeTrailers = listaDeTrailers.filter(item => item != listaDeTrailers[i]);
        break;
      }
    } 
    
    const div = document.querySelector(".painel");
    div.replaceChildren();
    atualiza();
    
  } else{
    alert("Anime não Encontrado!");
  }
  document.querySelector("#inputRemove").value = "";
}