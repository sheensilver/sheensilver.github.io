var hours = new Date().getHours();
var minutes = new Date().getMinutes(); 
var hoursAndMinutes = hours + 'giờ ' + minutes + 'phút';
document.getElementsByTagName('title')[0].innerHTML = hoursAndMinutes;
document.getElementsByTagName('p')[0].innerHTML = hoursAndMinutes;
