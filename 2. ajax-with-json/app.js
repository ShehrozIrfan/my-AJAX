var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

var user = document.getElementById("user");
var users = document.getElementById("users");

btn1.addEventListener('click', loadUser);
btn2.addEventListener('click', loadUsers);

function loadUser() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'user.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
            
            //so the below statement will show undefined, so to make this work we've to use the JSON.parse()
            // var userData = this.responseText;
            // console.log(userData.name);

            //using JSON.parse();
            var userData = JSON.parse(this.responseText);
            console.log(userData.name);

            //now we will show the user data in the div.
            user.innerHTML = `
                <ul>
                    <li>Name: ${userData.name}</li>
                    <li>Age: ${userData.age}</li>
                    <li>Email: ${userData.email}</li>
                </ul>
            `;
        }
    }

    xhr.send();
}


//as we've to now work with array of users, so it is a little bit different then the single user.
function loadUsers() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);
            var usersData = JSON.parse(this.responseText);
            console.log(usersData[0].name);

            var output = '';
            

            //you can also try using for loop
            //for(var i = 0; i < usersData.length; i++)
            //using for-in loop
            for(var i in usersData) {
                output += `
                    <ul>
                        <li>Name: ${usersData[i].name}</li>
                        <li>Age: ${usersData[i].age}</li>
                        <li>Email: ${usersData[i].email}</li>
                    </ul>
                `;
            }

            users.innerHTML = output;
        }
    }

    xhr.send();
}