let newX = 0, newY = 0, startX = 0, startY = 0;
const card = document.querySelector('.card');

card.addEventListener('mousedown', mouseMown)
function mouseMown(e){
    startX = e.clientX
    startY = e.clientY
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY
    card.style.top = (card.offsetTop - newY) + 'px'
    card.style.left =  (card.offsetLeft - newX) + 'px'
}

function mouseUp(e){
document.removeEventListener('mousemove', mouseMove)
}

window.addEventListener('keydown', (e) => {
    // Only allow printable characters (letters, numbers, space, etc.)
    if (
        e.key.length === 1 && 
        !e.ctrlKey && 
        !e.metaKey && 
        !e.altKey
    ) {
        card.textContent += e.key;
    } else if (e.key === 'Backspace') {
        card.textContent = card.textContent.slice(0, -1);
    } else if (e.key === 'Enter') {
        card.textContent += '\n';
    }
});