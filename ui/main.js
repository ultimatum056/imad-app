//counter code
var button = document.getElementById('counter');

button.onclick = function(){
   
    //create a request obj
   
    var request =new XMLHttpRequest();
   
    //capture the resp & store it in var
   
    request.onreadystatechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
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

//submit name

var nameIp = document.getElementById('name');
var name =nameIp.value;
var submit = document.getElementById('submit_btn');
submit.onclick =function(){
    
    //mkae a req to server and send name
    //capture
    var names=['name1','namne2','name3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list +='<li>' + names[i] + '</li>';
        
    }
  var ul=document.getElementById('namelist');
  ul.innerHTML = list;
}