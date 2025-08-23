const color = document.querySelectorAll(".color")

color.forEach((item) =>{
    const colorData = item.getAttribute("color-data");
    item.style.backgroundColor = colorData;
})