function checkOverflow(card) {
    const contentArea = card.querySelector('.card-info');
    const textArea = card.querySelector('.card-text');
    const readMoreButton = card.querySelector('.read-more-btn');
    const isOverflowing = textArea.clientHeight > contentArea.clientHeight;

    if (isOverflowing) {
        readMoreButton.style.display = 'inline-block';
    } else {
        readMoreButton.style.display = 'none';
        card.classList.remove('expanded');
        readMoreButton.textContent = 'Read more';
    }
}


const cards = document.querySelectorAll('.card');


function checkAllCards() {
    cards.forEach((card) => {
        const readMoreButton = card.querySelector('.read-more-btn');
        readMoreButton.addEventListener('click', () => {
            card.classList.toggle('expanded');
            readMoreButton.textContent = card.classList.contains('expanded') ? 'Read less' : 'Read more';
        });
    
        checkOverflow(card);
    });
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        cards.forEach(card => checkOverflow(card));
    }, 200);
});

window.addEventListener('DOMContentLoaded', checkAllCards)