function addMore(){

document.getElementById('error').innerHTML=" ";

    let name = document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="Please enter value !";
    }
    else{
        let newtodo =  document.getElementById('li');
        let li = document.createElement('li');
        li.textContent=name;
        newtodo.appendChild(li);
    }
     
    document.getElementById('name').value=" ";


    li.addEventListener('click', function(){
        li.style.textDecoration = "line-through";
    })
    
    li.addEventListener('dblclick', function(){
        li.removeChild();
    });

}

/*let x = document.getElementById('btnClick');
let y = document.getElementById('todo-items');
let z = document.getElementById('name');

x.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    z.appendChild(paragraph);
})*/








