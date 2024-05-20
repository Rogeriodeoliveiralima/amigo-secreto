let amigos = [];


function adicionar(){

  let nomeAmigos = document.getElementById('nome-amigo');

  if(nomeAmigos.value == ''){
   return alert('Informe nome de um amigo !!!!');
  }

  if(amigos.includes(nomeAmigos.value)){
    return alert('Amigos Ja adcionado!!');
  }

  let lista = document.getElementById('lista-amigos');
  amigos.push(nomeAmigos.value);

  if(lista.textContent == '' ){
    lista.textContent = nomeAmigos.value;
  }else {
    lista.textContent = lista.textContent + ', '+ nomeAmigos.value;
 }
  nomeAmigos.value = '';
}


function sortear(){
  if(amigos.length < 4){
    return alert('Adicione no minimo quatro amigos!!')
  }

  embaralha(amigos);

  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < amigos.length; i++){
    if(i == amigos.length - 1){
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> '+ amigos[0] + '<br>';
    }else{
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->'+ amigos[i + 1] + '<br>';
    }
  }

}

 function reiniciar(){
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
  amigos = [];
}



function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);
      
      // guarda de um índice aleatório da lista
      const elemento = lista[indice - 1];
      
      lista[indice - 1] = lista[indiceAleatorio];
      
      lista[indiceAleatorio] = elemento;
  }
}