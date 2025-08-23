let newX = 0, newY = 0, startX = 0, startY = 0;
let draggedCard = null;

const cardsContainer = document.querySelector('.cards');

cardsContainer.addEventListener('mousedown', function(e) {
    const card = e.target.closest('.card');
    if (!card) return;
    draggedCard = card;
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
});

function mouseMove(e) {
    if (!draggedCard) return;
    newX = startX - e.clientX;
    newY = startY - e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    draggedCard.style.position = 'absolute';
    draggedCard.style.top = (draggedCard.offsetTop - newY) + 'px';
    draggedCard.style.left = (draggedCard.offsetLeft - newX) + 'px';
}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
    draggedCard = null;
}

const addButton = document.querySelector('.add');
const cont = `<div class="card" style="position:absolute; top:0; left:0;">
    <textarea name="title" id="title" class="text" placeholder="Note Title">Note Title</textarea>
    <div class="break"></div>
    <textarea class="textarea" placeholder="Write your note here...">Write your note here...</textarea>
</div>`;

addButton.addEventListener('click', () => {
    cardsContainer.insertAdjacentHTML('beforeend', cont);
});