//counter code
var button = document.getElementById('counter');

button.onclick = function(){
   
    //create a request obj
   
    var request =new XMLHttpRequest();
   
    //capture the resp & store it in var
   
    request.onreadystatechange=function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status==200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        } 
        //not done yet
    };
   
   //make the req
   request.open('GET','http://ashishkothari056.imad.hasura-app.io/counter',true);
    request.send(null);
   
};