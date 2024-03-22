const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');

yesBtn.addEventListener('click', () => {
    result.textContent = "YEHEYY I LOVE YOU!!";
    result.classList.remove('hidden');
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

noBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
});