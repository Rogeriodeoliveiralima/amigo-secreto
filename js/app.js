
let amigos = [];

function adicionar(){

  let nomeAmigo = document.getElementById('nome-amigo');
  if(nomeAmigo.value == ''){
    return ('Informe nome do Amigo!');
  }

  if(amigos.includes(nomeAmigo.value) ){
    return alert('Esse nome de amigo ja esta na lista!');
  }

  let lista = document.getElementById('lista-amigos');
  amigos.push(nomeAmigo.value);

  if(lista.textContent == ''){
    lista.textContent = nomeAmigo.value;
  }else{
    lista.textContent = lista.textContent + ', '+ nomeAmigo.value;
  }
  nomeAmigo.value ='';
}

function sortear(){

 if(amigos.length < 4){
  return alert('Adicione no minimo 4 amigos!');
 }

  embaralha(amigos);

  let sorteio = document.getElementById('lista-sorteio');
  for (let i = 0; i < amigos.length; i++){
    if( i == amigos.length -1){
      sorteio.innerHTML = sorteio.innerHTML + amigos[i]+ ' --> '+ amigos[0] + '<br>';
    }else{
      sorteio.innerHTML = sorteio.innerHTML + amigos[i]+ ' --> '+ amigos[i + 1] + '<br>';
    }
  }
}

function reiniciar (){
  document.getElementById('lista-sorteio').innerHTML = '';
  document.getElementById('lista-amigos').innerHTML = '';
  
}


function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
          [lista[indiceAleatorio], lista[indice - 1]];
  }
}

