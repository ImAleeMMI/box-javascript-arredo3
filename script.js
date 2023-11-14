
document.addEventListener("DOMContentLoaded", function () {

  // Tramite id del tag html
  var box1 = document.getElementById('box-1')
  console.log(box1);

  //	Restituisce	un	riferimento	al	padre	del	nodo corrente, se tale nodo esiste
  console.log('parentNode');
  console.log(box1.parentNode);

  // Restituisce un array contenente tutti i figli del nodo corrente
  console.log('parentNode');
  console.log(box1.parentNode);

  // Restituisce un riferimento al primo figlio del nodo corrente, se tale nodo esiste
  console.log('childNodes');
  console.log(box1.childNodes);

  // Restituisce un riferimento al primo figlio del nodo corrente, se tale nodo esiste
  console.log('firstChild');
  console.log(box1.firstChild);

  // 	Restituisce un riferimento all’ultimo figlio del nodo corrente, se tale nodo esiste
  console.log('lastChild');
  console.log(box1.lastChild);

  // 	Restituisce	un	riferimento	al	fratello	precedente del corrente nodo
  console.log('previousSibling');
  console.log(box1.previousSibling);

  // 	Restituisce un riferimento al fratello successivo del corrente nodo
  console.log('nextSibling');
  console.log(box1.nextSibling);

  // 	Restituisce true se il nodo corrente ha dei nodi figli
  console.log('hasChildNodes()');
  console.log(box1.hasChildNodes());

  // Rimuove la classe class dall’elemento elem
  
  // Proprietà

  // 	Contiene il nome del nodo (il tag, P, EM, TD, …)
  console.log('nodeName');
  console.log(box1.nodeName);

  console.log('nodeType');
  console.log(box1.nodeType);

  console.log('attributes');
  console.log(box1.attributes);

  console.log('ownerDocument');
  console.log(box1.ownerDocument);


  console.log('getElementsByName');
  var name = document.getElementsByName('box');
  console.log(name);

  console.log('getElementsByClassName');
  var classs = document.getElementsByClassName('box');
  console.log(classs);

  console.log('getElementsByTagName');
  var tags = document.getElementsByTagName('h3');
  console.log(tags);

  console.log('querySelector');
  var sel = document.querySelectorAll('h3');
  console.log(sel);

});

function rimuoviClasse(){

  var elem = document.getElementsByClassName("box");
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.toggle("toToggle");
  }
}

function apriPrompt() {
  
  var inputValue = prompt("Inserisci un box");

  elemt = document.getElementById("box-"+inputValue);
  elemt.classList.toggle("toToggle");
  



}

