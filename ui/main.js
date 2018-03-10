console.log('Loaded!');

var ele= document.getElementById('ask');
ele.innerHTML='new vaalue';

//move the img
var img = document.getElementById('img');

var marginLeft = 0 ;

function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,100);
};

