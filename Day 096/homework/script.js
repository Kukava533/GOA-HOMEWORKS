// მოზრდილი ქაუნთერი
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// ლოკალური სტორეჯის მნიშვნელობის აღდგენა
let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
countDisplay.textContent = count;

// ფუნქცია ქაუნთერის ვადამდე განახლებისთვის
function updateCount() {
    localStorage.setItem('count', count);
    countDisplay.textContent = count;
}

// ღილაკის ფუნქციები
incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateCount();
});
