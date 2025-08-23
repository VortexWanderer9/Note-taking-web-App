import { selectedColor } from './color.js';



let newX = 0, newY = 0, startX = 0, startY = 0;
let draggedCard = null;

const cardsContainer = document.querySelector('.cards');

function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
}
function getClientY(e) {
    return e.touches ? e.touches[0].clientY : e.clientY;
}

function dragStart(e) {
    const card = e.target.closest('.card');
    if (!card) return;
    draggedCard = card;
    startX = getClientX(e);
    startY = getClientY(e);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('touchmove', mouseMove, {passive: false});
    document.addEventListener('touchend', mouseUp);
}

function mouseMove(e) {
    if (!draggedCard) return;
    e.preventDefault && e.preventDefault();
    newX = startX - getClientX(e);
    newY = startY - getClientY(e);
    startX = getClientX(e);
    startY = getClientY(e);
    draggedCard.style.position = 'absolute';
    draggedCard.style.top = (draggedCard.offsetTop - newY) + 'px';
    draggedCard.style.left = (draggedCard.offsetLeft - newX) + 'px';
}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    document.removeEventListener('touchmove', mouseMove);
    document.removeEventListener('touchend', mouseUp);
    draggedCard = null;
}

cardsContainer.addEventListener('mousedown', dragStart);
cardsContainer.addEventListener('touchstart', dragStart, {passive: false});

const addButton = document.querySelector('.add');
const cont = `<div class="card" style="position:absolute; top:0; left:0;">
    <textarea name="title" id="title" class="text" placeholder="Note Title">Note Title</textarea>
    <div class="break"></div>
    <textarea class="textarea" placeholder="Write your note here...">Write your note here...</textarea>
</div>`;
addButton.addEventListener('click', () => {
    cardsContainer.insertAdjacentHTML('beforeend', cont);
    if(selectedColor){
    const backgroundColor = selectedColor.getAttribute('color-data');
    console.log(backgroundColor);
    document.querySelector('.container').style.backgroundColor = backgroundColor;
}

});

