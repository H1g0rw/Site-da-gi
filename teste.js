const naoButton = document.getElementById("naoButton");

const moveButton = () => {
  const buttonWidth = naoButton.offsetWidth;
  const buttonHeight = naoButton.offsetHeight;
  
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  naoButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
};

naoButton.addEventListener("click", moveButton);
naoButton.addEventListener("touchstart", moveButton);
