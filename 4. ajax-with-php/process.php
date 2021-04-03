<?php 

echo "Processing ...";

//check for POST name.
if(isset($_POST['name'])) {
    echo "POST: Your name is " . $_POST['name'] . "  ";

    $name = $_POST['name'];
    //now we will add this 'name' in to database.

    //establishing connection
    $connection = mysqli_connect('localhost', 'root', 'root', 'ajaxphp', '3307');

    if(!$connection) {
        die("Database Connection Failed" . mysqli_error($connection));
    }

    $query = "INSERT INTO users(name) ";
    $query .= "VALUES('$name')";

    $result = mysqli_query($connection, $query);

    if(!$result) {
        die("Query Failed... " .  mysqli_error($connection));
    } else {
        echo "Record Added Successfully.";
    }
}

//check for GET name.
if(isset($_GET['name'])) {
    echo "GET: Your name is " . $_GET['name'];
}

?>