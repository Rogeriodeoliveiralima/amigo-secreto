
let amigos = [];

function adicionar(){
  let nomeAmigo = document.getElementById('nome-amigo');
  if(nomeAmigo.value == ''){
    return alert('Informe nome do amigo!')
  }

  if(amigos.includes(nomeAmigo.value)){
    return alert('Nome ja foi colocado na lista');
  }


  let lista = document.getElementById('lista-amigos');
  amigos.push(nomeAmigo.value);

  if(lista.textContent == ''){
    lista.textContent = nomeAmigo.value;
  }else{
    lista.textContent = lista.textContent + ', '+ nomeAmigo.value;
  }
  nomeAmigo.value = '';

}

function sortear(){
  if(amigos.length < 4){
    return alert('Minimo de quatro amigos!');
  }

  embaralha(amigos);

  let sorteio = document.getElementById('lista-sorteio');
  for(let i = 0; i < amigos.length; i++){
    if(i == amigos.length -1){
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] +'<br>';
    }else{
      sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] +'<br>';
    }
  }
}

function reiniciar(){
  document.getElementById('nome-amigo').innerHTML = '';
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
  amigos = [];
}


function embaralha(lista) {

  let indice = lista.length
  
  while(indice) {
      // atenção para o pós-incremento indice-- 
      const indiceAleatorio = Math.floor(Math.random() * indice--);
      [lista[indice], lista[indiceAleatorio]] = 
          [lista[indiceAleatorio], lista[indice]];
  }
}