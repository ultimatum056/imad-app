console.log('Loaded!');

var element = document.getElementById('ak');
element.innnerHTML = 'the text has changed';
//move the img
var img = document.getElementById('img');
img.onclick = function(){
    img.style.marginleft='100px';
};
