

const container = document.querySelector("#container");
const numBox = 20;
//document.getElementById("container").style.height = numBox*10+"px";
//document.getElementById("container").style.width = numBox*10+"px";





const contStyle = getComputedStyle(container);
const contHeight = parseInt(contStyle.height);
const contWidth= contStyle.width;

//console.log(contHeight);
const pixelSize  = (contHeight / numBox);
//console.log("PIXEL SIZE" + pixelSize);




for (i = 0; i<numBox; i++){
    /*console.log("created" + i);
    const grid = document.createElement('div');
    grid.setAttribute('class','pixel');
    grid.textContent = i;
    container.appendChild(grid);
    */
    for (j = 0; j<numBox; j++){
        
        let pixel = document.createElement('div');
        const pixelID = ((i*numBox)+j)

        pixel.setAttribute('class','pixel');
        pixel.setAttribute('id' , pixelID );
        //console.log(pixel.getAttribute('id'));
        //pixel.style.backgroundColor = "blue";
        pixel.style.height = pixelSize+"px";
        pixel.style.width=pixelSize+"px";
       // pixel.style.borderStyle = "solid";
        
        
        
        
        container.appendChild(pixel);
        let pixelStyle = getComputedStyle(pixel);
        pixel.addEventListener('mousemove', function (e){
            const x = getComputedStyle(e.target);
            console.log(x.backgroundColor == 'rgb(0, 128, 0)');
            if(x.backgroundColor == 'rgb(0, 128, 0)'){
                e.target.style.background = 'blue'
            }/*else{
                e.target.style.background = 'green';
            }
            */


            
        });
    }
}




