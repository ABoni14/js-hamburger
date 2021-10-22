const hamburgerMenu = document.getElementById("hamburger-menu");
const openClose = document.getElementById("close");

openClose.addEventListener('click',function(){
  // codice che voglio eseguire una volta soddisfatto l'evento
  console.log('ho cliccato');
  hamburgerMenu.classList.add("hamburger-menu.active");
});




