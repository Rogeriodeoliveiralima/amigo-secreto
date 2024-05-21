let amigo = [];

function adicionar(){
  let nomeAmigo = document.getElementById('nome-amigo');
  
  if(nomeAmigo.value == ''){
    return alert('INFORME O NOME DOS AMIGOS!');
  }

  if(amigo.includes(nomeAmigo.value)){
     return alert ('NOME AMIGO JA ADICIONADO!')
  }

  let lista = document.getElementById('lista-amigos');
   amigo.push(nomeAmigo.value);

  if(lista.textContent == ''){
    lista.textContent = nomeAmigo.value;
  }else{
    lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
  }
  
  nomeAmigo.value = '';
} 

function sortear(){

  if(amigo.length < 4){
    return alert('MINIMO DE 4 AMIGOS PARA PARTICIPAR AMIGO SECRETO!')
  }

 

  embaralha(amigo);

  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < amigo.length; i++){
    if(i == amigo.length - 1){
      sorteio.innerHTML = sorteio.innerHTML + amigo[i] + ' --> '+ amigo[0] + '<br>';
    }else{
      sorteio.innerHTML = sorteio.innerHTML + amigo[i] + ' --> '+ amigo[i + 1] + '<br>';
    }
  }

}

function reiniciar(){
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
  amigo = [];
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