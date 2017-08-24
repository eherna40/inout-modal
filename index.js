const hideButton = document.getElementById('hide-modal')
const img = document.getElementById('img')
const close = document.getElementById('close')
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeutton = document.getElementById('warning');

img.addEventListener('click', activeModal);

closeutton.addEventListener('click', removeModal);

close.addEventListener('click', removeModal);

hideButton.addEventListener('click', removeModal);

overlay.addEventListener('click', function(e){
  if(e.target.id === 'overlay'){
    removeModal();
  }        
})

function activeModal(){
  if (overlay.classList.length === 2){
    overlay.classList.remove('deactive');
  }
  overlay.classList.add('active');
  modal.style.animation = 'modalIn .8s';
}

function removeModal(){
  modal.style.animation = 'modalOut .8s forwards';
  overlay.classList.remove('active');
  overlay.classList.add('deactive');
}
