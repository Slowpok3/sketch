

const container = document.querySelector("#container");
console.log("helo");

var numBox = 10;











var mouseDown = 0;
document.body.onmousedown = function(){
    mouseDown = 1;
    //alert("hee");
}

document.body.onmouseup = function(){
    mouseDown = 0;
}

function generateGrid(container, numBox){
    const contStyle = getComputedStyle(container);
    const contHeight = parseInt(contStyle.height);
    const contWidth= contStyle.width;


    const pixelSize  = (contHeight / numBox);
    
    
    for (i = 0; i<numBox; i++){
        for (j = 0; j<numBox; j++){
            
            let pixel = document.createElement('div');
            
    
            pixel.setAttribute('class','pixel');
            pixel.setAttribute('ondragstart', "return false");
            pixel.style.height = pixelSize+"px";
            pixel.style.width=pixelSize+"px";
            
            
            
            
            container.appendChild(pixel);
            let pixelStyle = getComputedStyle(pixel);
            pixel.addEventListener('mousemove', function (e){
                if (mouseDown == 1){
                    const x = getComputedStyle(e.target);
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
}

generateGrid(container,numBox);

const but = document.getElementById("but");
but.addEventListener('click', function(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    generateGrid(container, document.getElementById("in").value);

})





