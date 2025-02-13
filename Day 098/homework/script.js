document.addEventListener('DOMContentLoaded', function () {
    const submitNameButton = document.getElementById('submitName');
    const usernameInput = document.getElementById('username');
    const nameForm = document.getElementById('nameForm');
    const mainPage = document.getElementById('mainPage');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const colorPicker = document.getElementById('colorPicker');
    const scoreDisplay = document.getElementById('score');
    const targetNumberDisplay = document.getElementById('targetNumber');
    const numberInput = document.getElementById('numberInput');
    const checkNumberButton = document.getElementById('checkNumber');
    const difficultyDisplay = document.getElementById('difficulty');
    
    let userName = localStorage.getItem('userName');
    let score = parseInt(localStorage.getItem('score')) || 0;
    let difficulty = parseInt(localStorage.getItem('difficulty')) || 2;
    let targetNumber = generateRandomNumber(difficulty);
    
    // Handle first time user interaction
    if (!userName) {
        nameForm.style.display = 'block';
        mainPage.style.display = 'none';
    } else {
        nameForm.style.display = 'none';
        mainPage.style.display = 'block';
        userNameDisplay.textContent = userName;
        scoreDisplay.textContent = score;
        targetNumberDisplay.textContent = targetNumber;
        difficultyDisplay.textContent = `1-${difficulty}`;
    }

    submitNameButton.addEventListener('click', () => {
        userName = usernameInput.value;
        if (userName) {
            localStorage.setItem('userName', userName);
            localStorage.setItem('score', 0);
            localStorage.setItem('difficulty', 2);
            score = 0;
            difficulty = 2;
            targetNumber = generateRandomNumber(difficulty);
            nameForm.style.display = 'none';
            mainPage.style.display = 'block';
            userNameDisplay.textContent = userName;
            scoreDisplay.textContent = score;
            targetNumberDisplay.textContent = targetNumber;
            difficultyDisplay.textContent = `1-${difficulty}`;
        }
    });

    colorPicker.addEventListener('input', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });

    checkNumberButton.addEventListener('click', () => {
        const guessedNumber = parseInt(numberInput.value);
        if (guessedNumber === targetNumber) {
            score++;
            difficulty++;
            localStorage.setItem('score', score);
            localStorage.setItem('difficulty', difficulty);
            scoreDisplay.textContent = score;
            difficultyDisplay.textContent = `1-${difficulty}`;
            targetNumber = generateRandomNumber(difficulty);
            targetNumberDisplay.textContent = targetNumber;
        }
    });

    function generateRandomNumber(difficulty) {
        const min = Math.pow(10, difficulty - 1);
        const max = Math.pow(10, difficulty) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
