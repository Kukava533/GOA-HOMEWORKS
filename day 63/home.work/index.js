const progressBar = document.querySelector('.progress.bar div');
const btn = document.getElementById('btn');

let progress = 0;

btn.addEventListener('click', () => {
    // Simulate a progress increment every 100ms
    const intervalId = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(intervalId);
        }
    }, 100);
});