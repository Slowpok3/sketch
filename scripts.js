

const container = document.querySelector("#container");
const numBox = 12;
//document.getElementById("container").style.height = numBox*10+"px";
//document.getElementById("container").style.width = numBox*10+"px";
const contStyle = getComputedStyle(container);
const contHeight = parseInt(contStyle.height);
const contWidth= contStyle.width;

console.log(contHeight);
const pixelSize  = (contHeight / numBox);
console.log("PIXEL SIZE" + pixelSize);




for (i = 0; i<numBox; i++){
    /*console.log("created" + i);
    const grid = document.createElement('div');
    grid.setAttribute('class','pixel');
    grid.textContent = i;
    container.appendChild(grid);
    */
    for (j = 0; j<numBox; j++){
        
        let pixel = document.createElement('div');
        
        pixel.setAttribute('class','pixel');
        //pixel.style.backgroundColor = "blue";
        pixel.style.height = pixelSize+"px";
        pixel.style.width=pixelSize+"px";
       // pixel.style.borderStyle = "solid";
        
        
        
        
        container.appendChild(pixel);
        let pixelStyle = getComputedStyle(pixel);
        
        console.log(pixelStyle.height);
        
        console.log(pixelStyle.backgroundColor);
    }
}


