<?php
    $myfile = fopen("works/works_list.txt", "r") or die("Unable to open file!");
    $workText = "";
    while(!feof($myfile))
    {
        $workText = fgets($myfile);
        $workText = explode(":", $workText);
        if(count($workText) < 2)
            echo "<li>" . $workText[0] . "</li>";
        else
            echo '<li class="checked">' . $workText[1] . "</li>";
    }
    fclose($myfile);
?>