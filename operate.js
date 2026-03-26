// let tOn = document.getElementById("on").innerHTML;
 var img;
 var bg;
 var H1;
   

function turning(s) {
   
    if (s == "on") { 
        if (img == "on.gif") {
          alert("udah woi") };
         img = "on.gif";
         bg = document.getElementById("content-bg").style.backgroundColor = "white";
         H1 = document.getElementsByClassName("H1-1")[0].style.color = "black";

     } else if (s == "off") {
        if (img == "off.gif") {
          alert("udah woi") };
         img = "off.gif";
         bg = document.getElementById("content-bg").style.backgroundColor = "black";
         H1 = document.getElementsByClassName("H1-1")[0].style.color = "white";
     };
     document.getElementById("content-img").src = img;

    
}

 