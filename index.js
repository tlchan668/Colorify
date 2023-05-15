console.log('Script loaded...');

function paint(color) {
    console.log(color);
    const circle =document.getElementById('circleID');
    circle.style = `background-color:${color}`;
    console.log(circle);
    if (color == 'random'){
        console.log('in random')
        
        circle.style = background-color;"randomColor";
    }
}
function randomColor(){
    var randomColor = '#' + (Math.floor(Math.random()*16777215).toString(16));
    console.log(randomColor);
    const circle = document.getElementById('circleID').style.backgroundColor = randomColor;
    
}