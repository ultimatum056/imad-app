//counter code
var button = document.getElementById('counter');
var counter= 0;
button.onclick = function(){
    //make a request to the counter endpoint
    
    //capture the resp & store it in var
    
    //render the var in correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};