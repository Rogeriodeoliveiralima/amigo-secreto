listaAmigos = [];

function adicionar(){
  let nomeAmigo = document.getElementById('nome-amigo');

  if(nomeAmigo.value == ''){
    return alert('Inclua o nome de um amigo!!');
  }
  
  if(listaAmigos.includes(nomeAmigo.value)){
    return alert('Esse nome ja esta lista de Amigos!');
  }



  let lista = document.getElementById('lista-amigos');
  listaAmigos.push(nomeAmigo.value);

  if(lista.textContent == ''){
    lista.textContent = nomeAmigo.value;
  }else{
    lista.textContent = lista.textContent + (', ')+ nomeAmigo.value;
  }
  
  nomeAmigo.value = '';
}

function sortear(){

  if(listaAmigos.length < 4){
    return alert('Minimo de quatro amigos para sorteio');
  }

  embaralha(listaAmigos);

  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < listaAmigos.length; i++){
    if(i == listaAmigos.length -1){
      sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[0] + '<br>';
    }else{
      sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + ' --> ' + listaAmigos[i + 1] + '<br>';
    }
  }
}

function reiniciar(){
  document.getElementById('lista-amigos').innerHTML = ''; 
  document.getElementById('lista-sorteio').innerHTML = '';
}


function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
          [lista[indiceAleatorio], lista[indice - 1]];
  }
}

