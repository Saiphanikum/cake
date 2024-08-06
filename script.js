document.addEventListener('DOMContentLoaded', () => {
    const validUsernames = ['Phani', 'Ravalli', 'Bindu'];

    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const cakeContainer = document.getElementById('cake-container');
    const blowCandlesPrompt = document.getElementById('blow-candles-prompt');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();

        if (validUsernames.includes(username)) {
            loginForm.style.display = 'none';
            cakeContainer.style.display = 'block';
            blowCandlesPrompt.style.display = 'block';
            simulateBlowingCandles();
        } else {
            errorMessage.textContent = 'Invalid username';
        }
    });
});

function simulateBlowingCandles() {
    const flames = document.querySelectorAll('.flame');

    // Start glowing effect
    flames.forEach(flame => {
        flame.style.display = 'block';
        flame.style.animation = 'flicker 0.2s infinite alternate';
    });

    // Stop glowing effect and show wish after 4 seconds
    setTimeout(() => {
        flames.forEach(flame => {
            flame.style.animation = 'none';
            flame.style.display = 'none';
        });
        document.getElementById('wish').style.display = 'block';
        document.getElementById('blow-candles-prompt').style.display = 'none';
    }, 4000);
}
