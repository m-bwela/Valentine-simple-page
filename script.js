function sayYes() {
  // Hide the buttons
  document.querySelector('.buttons').style.display = 'none';
  
  // Show celebration
  document.getElementById('response').innerHTML = `
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFheTN5MjNjcjBqcXRoYTFsMXpubXo0OWNnOWxlMnl0aW5nMWxjaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Yay!" class="gif celebration">
    <h2>Yaay! 🎉💕</h2>
    <p class="love-msg">I knew you'd say yes!</p>
  `;
  launchHearts();
}

function noWay(btn) {
  // Move the button to a random position on screen
  const maxX = window.innerWidth - btn.offsetWidth - 50;
  const maxY = window.innerHeight - btn.offsetHeight - 50;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  btn.style.position = 'fixed';
  btn.style.left = randomX + 'px';
  btn.style.top = randomY + 'px';
  btn.innerText = 'Nope! 😏';
}

function launchHearts() {
  const container = document.getElementById('hearts-container');
  const hearts = ['💕', '❤️', '💖', '💗', '💝', '💓'];
  
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'floating-heart';
      heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.bottom = '0';
      container.appendChild(heart);
      
      // Remove after animation
      setTimeout(() => heart.remove(), 3000);
    }, i * 150);
  }
}