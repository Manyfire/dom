window.onload= inicio ;

let colores = ['green','black','violet'];
let colorear = ['pink', 'orange', 'green'];

function inicio(){
  document.querySelector('.container-principal').style.backgroundColor='red';
  document.querySelector('.container-principal').style.border='2px solid';
 

  document.querySelectorAll('.box')[0].style.backgroundColor='yellow';
  document.querySelectorAll('.box')[1].style.backgroundColor='grey';
  document.querySelectorAll('.box')[2].style.backgroundColor='white';
  // first button cambio de colores:
  document.getElementById('cambioColores').onclick=cambios;
  // secound button effacer:
  document.getElementById('effacer').onclick=effacer;
}

function cambios(){
  for(let i=0; i<colores.length; i++){
    document.querySelectorAll('.box')[i].style.backgroundColor=colores[i];

    //container-principal2:
    document.querySelector('body').insertAdjacentHTML("beforeend",`
    <div class="container-principal2">
    <div class="box1">box 1 </div>
    <div class="box1"> box 2</div>
    <div class="box1">box 3</div>
    </div>`);
    for(let y=0; y<colorear.length; y++){
      document.querySelectorAll('.box1')[y].style.backgroundColor=colorear[y];
    }
    // document.querySelector('.box1').style.backgroundColor='orange'
    
    
  }
}

function effacer(){
  document.querySelector('body').style.display='none'
}
