<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Here we add css file -->
    <link href="css/style.css" rel="stylesheet">

    <title>To Do List</title>

</head>
<body>
    <div id="todo-container">
        <div id="myDIV" class="header">
            <h2 id="todo-title">My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title...">
            <span onclick="newElement()" class="addBtn">Add</span>
        </div>
        <div id="list-container">
            <ul id="myUL">
                <!-- php here for reading from file -->
                <?php include 'php/readworks.php';?>
            </ul>
        </div>
    </div>
    
    <!-- Here we add javascript file -->
    <script src="app/app.js"></script>
</body>
</html>