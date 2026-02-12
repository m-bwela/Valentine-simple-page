function sayYes() {
  // Hide the buttons
  document.querySelector('.buttons').style.display = 'none';
  
  // Show celebration with love note
  document.getElementById('response').innerHTML = `
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmFheTN5MjNjcjBqcXRoYTFsMXpubXo0OWNnOWxlMnl0aW5nMWxjaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Yay!" class="gif celebration">
    <h2>Yaay Shaya! 🎉💕</h2>
    <p class="love-msg">I knew you'd say yes!</p>
    
    <div class="love-note">
      <p>💌 A little love note for you...</p>
      <p>"Every moment with you feels like magic. You make my heart skip a beat, and I can't imagine my life without you. Thank you for being you!"</p>
      <p class="signature">Forever yours ❤️</p>
    </div>
  `;
  launchHearts();
  launchConfetti();
  
  // Auto-play music on yes
  const music = document.getElementById('bgMusic');
  music.play().catch(() => {});
  document.querySelector('.music-btn').classList.add('playing');
}

// Array of escape messages
const escapeMessages = [
  'Nope! 😏',
  'Not today! 🙅',
  'Try again! 😜',
  'Keep trying! 💪',
  'You sure? 🤔',
  'Really?! 😲',
  'Think again! 💭',
  'No way! 🚫',
  'Catch me! 🏃',
  'lol, not happening! 😂',
  'Just say Yes Shaya! 💕'
];
let escapeCount = 0;
let yesScale = 1;

function noWay(btn) {
  // Move the button to a random position on screen
  const maxX = window.innerWidth - btn.offsetWidth - 50;
  const maxY = window.innerHeight - btn.offsetHeight - 50;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  btn.style.position = 'fixed';
  btn.style.left = randomX + 'px';
  btn.style.top = randomY + 'px';
  
  // Cycle through messages
  btn.innerText = escapeMessages[escapeCount % escapeMessages.length];
  escapeCount++;
  
  // Make Yes button bigger each time
  yesScale += 0.15;
  const yesBtn = document.querySelector('.btn-yes');
  yesBtn.style.transform = `scale(${yesScale})`;
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

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#ff6b9d', '#ff8fb3', '#ffd700', '#ff69b4', '#ff1493', '#ff6347', '#ffa500'];
  const shapes = ['■', '●', '▲', '★', '♦'];
  
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('span');
      confetti.className = 'confetti';
      confetti.innerText = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      container.appendChild(confetti);
      
      // Remove after animation
      setTimeout(() => confetti.remove(), 4000);
    }, i * 30);
  }
}

// Music toggle
function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.querySelector('.music-btn');
  
  if (music.paused) {
    music.play();
    btn.classList.add('playing');
    btn.innerText = '🔊';
  } else {
    music.pause();
    btn.classList.remove('playing');
    btn.innerText = '🎵';
  }
}

// Countdown to Valentine's Day
function updateCountdown() {
  const valentine = new Date('February 14, 2026 00:00:00').getTime();
  const now = new Date().getTime();
  const diff = valentine - now;
  
  const countdownEl = document.getElementById('countdown');
  
  if (diff <= 0) {
    countdownEl.innerHTML = '💖 <span>Happy Valentine\'s Day!</span> 💖';
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  
  countdownEl.innerHTML = `⏰ Valentine's Day in <span>${days}d ${hours}h ${mins}m ${secs}s</span>`;
}

// Start countdown
updateCountdown();
setInterval(updateCountdown, 1000);