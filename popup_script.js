function setTimeAndDate(timeElement, dateElement) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
                  "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date();
    var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    var time = date.getHours() + ":" + minutes;
    //In "date.getMonth", 0 indicates the first month of the year
    //In "date.getDay", 0 represents Sunday
    var date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear();
    timeElement.innerHTML = time;
    dateElement.innerHTML = date;
}

document.addEventListener("DOMContentLoaded", function(dcle) {
    var timeId = "time";
    var dateId = "date";
    var timeElement = document.getElementById(timeId);
    var dateElement = document.getElementById(dateId);
    setTimeAndDate(timeElement, dateElement);
});
