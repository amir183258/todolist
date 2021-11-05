const myNodeList = document.getElementsByTagName("li");
var i;
for(i = 0; i < myNodeList.length; i++)
{
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++)
{
    close[i].onclick = function() {
        var listElement = this.parentElement;
        listElement.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
    if(ev.target.tagName === "LI") // we have to use upper case here ("LI")
        ev.target.classList.toggle("checked");
}, false);

function newElement()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    // php part
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "http://localhost/test2/php/writework.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("text=" + inputValue);
    // js part
    li.appendChild(t);
    if(inputValue === "")
        alert("You must write something!");
    else
        document.getElementById("myUL").appendChild(li);
    
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    document.getElementById("myInput").value = "";

    close[close.length - 1].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}