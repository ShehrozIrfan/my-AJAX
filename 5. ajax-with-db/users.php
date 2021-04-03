<?php 
//In this we will get all the data from the database. and then we will use 'mysqli_fetch_all()' function to get all the data in the form of associative array. Then we'll encode that data to JSON.

$connection = mysqli_connect('localhost', 'root', 'root', 'ajaxphp', '3307');

if(!$connection) {
    die("Database Connection Failed." . mysqli_error($connection));
}

$query = "SELECT * FROM users";

$result = mysqli_query($connection, $query);

if(!$result) {
    die("Query Failed... " . mysqli_error($connection));
}

//fetch data in associative array
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

//endoing the data to json
echo json_encode($users);

?>