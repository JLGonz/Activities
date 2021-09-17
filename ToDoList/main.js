const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');


// let rem = document.getElementsByTagName('button');



function remove(btn){
    btn.addEventListener("click",function(){
       list.removeChild(btn.parentElement);
       
    });
}

btn.onclick = function(){
    
    var txt = input.value;
    if(txt =='' || txt.trim() == ''){
        alert('No new action is added!');
    }
    
    else{
        li = document.createElement('li');
    li.innerHTML = txt;
    var btn = document.createElement('button');
    btn.innerText="Delete";
    li.appendChild(btn);
    remove(btn);
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};


list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};

