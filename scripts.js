

const container = document.querySelector("#container");
const numBox = 10;





const contStyle = getComputedStyle(container);
const contHeight = parseInt(contStyle.height);
const contWidth= contStyle.width;


const pixelSize  = (contHeight / numBox);

var mouseDown = 0;
document.body.onmousedown = function(){
    mouseDown = 1;
    //alert("hee");
}

document.body.onmouseup = function(){
    mouseDown = 0;
}



for (i = 0; i<numBox; i++){
    for (j = 0; j<numBox; j++){
        
        let pixel = document.createElement('div');
        const pixelID = ((i*numBox)+j)

        pixel.setAttribute('class','pixel');
        pixel.setAttribute('id' , pixelID );
        pixel.style.height = pixelSize+"px";
        pixel.style.width=pixelSize+"px";
        
        
        
        
        container.appendChild(pixel);
        let pixelStyle = getComputedStyle(pixel);
        pixel.addEventListener('mousemove', function (e){
            if (mouseDown == 1){
                const x = getComputedStyle(e.target);
            console.log(x.backgroundColor == 'rgb(0, 128, 0)');
            if(x.backgroundColor == 'rgb(0, 128, 0)'){
                e.target.style.background = 'blue'
            }/*else{
                e.target.style.background = 'green';
            }
            */
            }
            


            
        });
    }
}




