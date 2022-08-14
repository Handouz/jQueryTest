var script=document.createElement('script');
script.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
//script.setAttribute("type","text/javascript");
document.head.appendChild(script);
console.log(script);
setTimeout(function() {
    // Add the rest of your code here, as we have to wait a moment before the document has jQuery as a part of it.
    //$("body").html("<h1>It Works!</h1>");
    console.log('Jquery was added');
  }, 5000);
// window.onload=function(){
//     alert('Window loaded');
// }
// $(document).ready(function(){
//     alert('document loaded');
// })
//As we can see in the above code the document is loaded before the window is loaded so we use $(document).ready() to run jQuery scripts.
var div=$('[type="square"]:first');
console.log("div=>", div);//Returns a jQuery object, so now we can call jQuery methods of jQuery object which is returned by the jQuery selector.

