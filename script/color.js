const color = document.querySelectorAll(".color")


let selectedColor = null;
color.forEach((item) =>{
    const color = item.getAttribute('color-data')
    item.style.backgroundColor = color;

    item.addEventListener('click', (e) =>{
        if(selectedColor == e.target){
            selectedColor.classList.remove('click')
            selectedColor = null
        }else{
            if(selectedColor){
                selectedColor.classList.remove('click')
            }
            item.classList.add('click')
            selectedColor = item
        }

    });
});