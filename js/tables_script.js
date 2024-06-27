function toggleFun() {
    document.body.classList.toggle('dark-mode');
const button = document.getElementById('mode');
if (document.body.classList.contains('dark-mode')) {
    button.textContent = 'Light Mode';
    button.style.backgroundColor = 'grey';
    button.style.color = 'black';
} else {
    button.textContent = 'Dark Mode';
    button.style.backgroundColor = 'grey';
    button.style.color = 'white';
}
};