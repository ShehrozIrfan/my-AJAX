var btn = document.getElementById("btn");
var usersDisplay = document.getElementById("users");
btn.addEventListener('click', loadUsers);

function loadUsers() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.php', true);

    xhr.onload = function() {
        if(this.status == 200) {
            var users = JSON.parse(this.responseText);
            console.log(users);

            var output = '';

            for(var i in users) {
                output += `
                    <ul>
                        <li>ID: ${users[i].id}</li>
                        <li>Name: ${users[i].name}</li>
                    </ul>
                `;
            }

            usersDisplay.innerHTML = output;
        }
    }

    xhr.send();
}