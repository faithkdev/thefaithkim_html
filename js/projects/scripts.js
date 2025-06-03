const readMoreButtons = document.querySelectorAll('.read-more-btn');
console.log({readMoreButtons});
readMoreButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.closest('.card');
        console.log({content});
        content.classList.toggle('expanded');
        btn.textContent = content.classList.contains('expanded') ? 'Read less' : 'Read more';
    });
});

console.log({readMoreButtons});