var myVar = setInterval(myTimer, 1000);
function myTimer() {
 var d = new Date();
 var time = d.toLocaleTimeString();
 console.log(time);
}