document.addEventListener('DOMContentLoaded', () => {
  function generateSplashScreen() {
    const intro = document.getElementById('intro');
    intro.innerHTML = `
    <div>
      <button id="play" class="mb-2">Play</button>
    </div>
    `;

    const playButton = document.querySelector('#play');
    playButton.addEventListener('click', () => {
      intro.classList.add('hide');
      const game = document.getElementById('game');
      game.classList.remove('hide');
      game.classList.add('show');

      const startButton = game.querySelector('#start');
      startButton.addEventListener('click', () => {
        console.log('start');
      });
    });
  }

  generateSplashScreen();
});
