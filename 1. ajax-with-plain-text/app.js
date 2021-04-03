//This is the working of AJAX with the plain text file.
//In this we can use two approaches:

//1. xhr.onload - it's the newest approach 
//2. xhr.onreadystatechange - older approach

//first of all we made an xhr object, then we open and send request to the server and between the open and send we've the onload function.

/*
HTTP Status
200: OK
403: Forbidden
404: Not Found
*/

/* 
readyState values
0: request not initialized
1: server connection established
2: request received
3. processing request
4: request finished and the response is ready
*/

const btn = document.getElementById("btn");
const data = document.getElementById("data");
btn.addEventListener('click', getData);

function getData() {
    console.log("Button Clicked");

    //creating the xhr object
    var xhr = new XMLHttpRequest();

    console.log(xhr.readyState);
    console.log(xhr);

    //open - type of request / file or url / async
    xhr.open("GET", "sample.txt", true);
    console.log(xhr.readyState);

    //xhr.onprogress is used to display loaders.
    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }
    xhr.onload = function () {
        console.log(xhr.readyState);
        //in order to get the data the status must be "Ok", that's why we're checking it.
        if(this.status === 200) {
            console.log(this.responseText);
        } 
        //we can also check for other statuses
        else if(this.status === 404) {
            console.log("PAGE NOT FOUND !");
        }
    }

    //xhr.onerror is used to display errors if something went wrong.
    xhr.onerror = function() {
        console.log("ERROR OCCURED");
    }


    // xhr.onreadystatechange = function () {
    //     console.log(this.readyState);
    //     if(this.readyState === 4 && this.status === 200) {
    //         data.innerHTML = this.responseText;
    //     }
    // }

    //xhr.send - it sends request to the server.
    xhr.send();

}