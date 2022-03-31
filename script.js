// Пиксель арт

let selectColor = document.querySelector(".chosen-color");
let eraser =  document.querySelector(".eraser");
let pixels = document.querySelectorAll(".pixel");

for( let pixel  of pixels){
    pixel.onclick = function(){
        if(eraser.checked){
            pixel.style.backgroundColor = "#ffffff";
        }else{
            pixel.style.backgroundColor = selectColor.value;
        }
    }
}

