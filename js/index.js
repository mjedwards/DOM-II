// Your code goes here
// let pageBG = document.getElementById('change');
let a = 0;
let b = 0;
let c = 0;
let d = 255;
let e = 255;
let f = 255;

let x = 255;
let y = 223;
let z = 0;


let img = document.getElementById('myImg');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let body = document.getElementById('change');
let dragMe = document.getElementById('funH1');

let changeText = document.getElementById('changeText');
let imgThree = document.getElementById('myImgTwo');

function diffIncreaseImageSize () {
    imgThree.addEventListener('mouseover', function () {
        alert('nice place!');
        img.style.height = '100px';
    }) 
}

function whatKey () {
    let keyNum;
    document.addEventListener('keyup', function(e){
            keyNum = e.keyCode;
            changeText.innerHTML = `You pressed key number ${keyNum}`;
    })
}


function dragHOne () {
    dragMe.addEventListener('drag', function(){
        dragMe.innerHTML = 'Drag Bus';
    })
}

function dragHOneEnd () {
    dragMe.addEventListener('dragend', function(){
        dragMe.innerHTML = 'Fun Bus';
    })
}

function mouseChangeBg () {
    body.addEventListener('mousemove', function() {
        body.style.backgroundColor = `rgb( ${x--} , ${y++} , ${z++} )`;
    })
}

function dblClickChangeImageSize () {
    imgOne.addEventListener('dblclick', function () {

            imgOne.style.height = '100vh';

    }) 

    imgTwo.addEventListener('dblclick', function () {
        
        imgTwo.style.height = '100vh';
       
    }) 
}

function dblClickChangeImageSizeAgain () {
    imgOne.addEventListener('click', function () {

            imgOne.style.height = 'auto';

    }) 

    imgTwo.addEventListener('click', function () {
        
        imgTwo.style.height = 'auto';
       
    }) 
}

function increaseImageSize () {
        img.addEventListener('mouseenter', function () {
            img.style.height = '100vh';
        }) 
}

function decreaseImageSize () {
    img.addEventListener('mouseleave', function () {
        img.style.height = 'auto';
    }) 
}

 function darkBG () {
    window.addEventListener('scroll', function() {
        document.getElementById('change').style.backgroundColor = `rgb( ${a++} , ${b++} , ${c++} )`;
        document.getElementById('change').style.color = `rgb( ${d--} , ${e--} , ${f--} )`;
    })
 }





darkBG();
increaseImageSize ();
decreaseImageSize();
dblClickChangeImageSize ();
dblClickChangeImageSizeAgain ();
mouseChangeBg ();
dragHOne ();
dragHOneEnd ();
whatKey();
diffIncreaseImageSize ();
