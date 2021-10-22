const hamburgerMenu = document.querySelector(".hamburger-menu");
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times")

open.addEventListener('click',function(){
  // codice che voglio eseguire una volta soddisfatto l'evento
  console.log('ho cliccato');
  hamburgerMenu.classList.add("active");
});

close.addEventListener('click',function(){
  // codice che voglio eseguire una volta soddisfatto l'evento
  console.log('ho cliccato');
  hamburgerMenu.classList.remove("active");
});









