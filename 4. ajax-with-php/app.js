var btn = document.getElementById("btn");
var getForm = document.getElementById("getForm");
var postForm = document.getElementById("postForm");

btn.addEventListener('click', getName);

getForm.addEventListener('submit', getName);

postForm.addEventListener('submit', postName);

function getName(e) {
    //preventing the default behavior of second form
    e.preventDefault();
    
    //getting the name for second form
    var name = document.getElementById("name1").value;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'process.php?name='+name, true);

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
        }
    }

    xhr.send();
}


function postName(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    var name = document.getElementById("name2").value;

    var params = "name="+name;

    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
        }
    }
    xhr.send(params);
}