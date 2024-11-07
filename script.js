const WEEK = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

function realTime() {
    var now = new Date();
    document.getElementById("time").innerText = zeroPadding(now.getHours()) + ":" +
        zeroPadding(now.getMinutes()) + ":" +
        zeroPadding(now.getSeconds());
    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding(now.getMonth() + 1) + "-" +
        zeroPadding(now.getDate()) + " " +
        WEEK[now.getDay() - 1];
}

realTime();

setInterval(realTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}