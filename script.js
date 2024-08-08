 const validUsernames = ['user1', 'user2', 'user3'];
const correctNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (validUsernames.includes(username)) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username. Please try again.';
    }
});

document.getElementById('submit-guess').addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guess').value, 10);
    const message = document.getElementById('game-message');
    if (guess === correctNumber) {
        message.textContent = 'Congratulations! You guessed the correct number.';
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('cake-container').style.display = 'block';
        setTimeout(simulateBlowingCandles, 3000);
    } else {
        message.textContent = 'Incorrect. Try again!';
    }
});

function simulateBlowingCandles() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => flame.style.opacity = '0');
    document.getElementById('wish').style.display = 'block';
    document.getElementById('blow-candles-prompt').style.display = 'none';
}
