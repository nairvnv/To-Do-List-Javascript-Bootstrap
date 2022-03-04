var input = document.getElementById("new_element");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});


var close_icon = document.getElementsByTagName("LI");
var i;
for (i = 0; i < close_icon.length; i++) {
    var span = document.createElement("i");
    span.className='bi bi-x-square';
    span.classList.add('close_action');
    close_icon[i].appendChild(span);
}

var close_action = document.getElementsByClassName("close_action");
var i;
for (i = 0; i < close_action.length; i++) {
close_action[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ol');
list.addEventListener('click', function(check) {
    if (check.target.tagName === 'LI') {
        check.target.classList.toggle('checked');
    }});
    
function add_item(){
    var new_item=document.getElementById("new_element").value;
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(new_item));

    if (new_item === '') {alert("no item typed in");} 
    else{document.getElementById("list").appendChild(li);}
    document.getElementById("new_element").value = "";

    var span = document.createElement("i");
    span.className='bi bi-x-square';
    span.classList.add('close_action');
    li.appendChild(span);

    for (i = 0; i < close_action.length; i++) {
        close_action[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
            }
    }
}