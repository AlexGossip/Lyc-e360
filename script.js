// Change le fond du site avec un bouton
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('themeBtn');
  button.addEventListener('click', () => {
    const newBg = prompt("Entrez la couleur ou URL de l'image de fond (ex: lightblue ou https://...) :");
    if(newBg){
      if(newBg.startsWith("http")){
        document.body.style.backgroundImage = `url('${newBg}')`;
        document.body.style.backgroundSize = "cover";
      } else {
        document.body.style.backgroundColor = newBg;
        document.body.style.backgroundImage = "";
      }
    }
  });
});
