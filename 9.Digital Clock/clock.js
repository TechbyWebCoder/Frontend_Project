

function showTime() {
    // Get the current time
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour >= 12) {
        am_pm = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour == 0) {
        hour = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}

setInterval(showTime, 1000);

showTime();
