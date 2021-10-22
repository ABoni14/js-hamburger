const hamburgerMenu = document.getElementsByClassName("hamburger-menu");
const openClose = document.getElementsByClassName("close");

openClose.addEventListener('click',function(){
  // codice che voglio eseguire una volta soddisfatto l'evento
  console.log('ho cliccato');
  hamburgerMenu.classList.add("hamburger-menu.active");
});




