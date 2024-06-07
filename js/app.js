
let amigos =[];

function adicionar(){
  let nomeAmigo = document.getElementById('nome-amigo');

  if(nomeAmigo.value == ''){
    return alert('Informe nome de um amigo');
  }

  if(amigos.includes(nomeAmigo.value)){
    return alert('Nome ja informado');
  }

  let lista = documet.getElementById('lista-amigos');
  amigos.push(nomeAmigo.value);

  if(lista.textContent == ''){
    lista.textContent = nomeAmigo.value;
  }else{
    lista.textContent = lista.textContent + ', '+ nomeAmigo.value;
  }

  nomeAmigo.value = '';
}

function embaralha(lista) {

  for (indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);
      
      // guarda de um índice aleatório da lista
      const elemento = lista[indice - 1];
  }
}