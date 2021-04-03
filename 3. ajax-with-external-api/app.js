//In this example we are using the GitHub API:
//       https://api.github.com/users
// the above API contains array of users in JSON

var btn = document.getElementById("btn");
var users = document.getElementById("users");

btn.addEventListener('click', loadUsers);

//Load Github users
function loadUsers() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function() {
        if(this.status == 200) {
            console.log(this.responseText);

            var gitHubUsers = JSON.parse(this.responseText);

            var output = '';

            for(var i in gitHubUsers) {
                //I've added the users class to below 'div' to apply some styling
                output += `
                    <div class="users">
                        <img src="${gitHubUsers[i].avatar_url}" width="80px" height="80px">
                        <ul>
                            <li>ID: ${gitHubUsers[i].id}</li>
                            <li>ID: ${gitHubUsers[i].login}</li>
                        </ul>
                    </div>
                `;
            }

            users.innerHTML = output;
        }
    }

    xhr.send();
}