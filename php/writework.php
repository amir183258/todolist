<?php
    $myfile = fopen("../works/works_list.txt", "a");
    $workText = $_POST["text"];
    fwrite($myfile, "\n" . $workText);
    fclose($myfile);
?>