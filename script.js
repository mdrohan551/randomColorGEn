function randomColor(){
var letters = "123456789abcdefghijklmnopqrstuvwxyz"
var color = "#"
for( i =0; i <6; i++){
    color = color + letters[Math.floor(Math.random() * 16)]
    console.log(Math.random)
    document.querySelector('#colorDis').textContent = color;
    document.body.style.backgroundColor =color
}




}