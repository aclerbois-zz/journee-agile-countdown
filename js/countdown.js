var time = 0;
var lastId = 0;

var interval = function (time, id) {
    display(time);
    if (time > 0 && id == lastId) {
        setTimeout(function () {
            interval(--time, id);
        }, 1 * 1000);
    }
};

var display = function (timeLeft) {
    if (timeLeft >= 60)
        var minutes = Math.floor(timeLeft / 60);
    else
        var minutes = 0;
    if (minutes.toString().length == 1) {
        minutes = "0" + minutes.toString();
    }

    if (timeLeft < 60)
        var seconds = timeLeft;
    else
        var seconds = timeLeft - (minutes * 60);

    if (seconds.toString().length == 1) {
        seconds = "0" + seconds.toString();
    }
    $("#displayTime").text(minutes + ":" + seconds);
}


$(document).ready(function () {
    $('#stop').hide();
    $('#start').click(function () {
        var minutesWant = parseInt($('#minutesTxt').val());
        lastId = Date.now();
        interval(minutesWant * 60, lastId);
        $('#start').hide();
        $('#minutesTxt').hide();
        $('#stop').show();
    });
    $('#stop').click(function () {
        $('#start').show();
        lastId = -1;
        $('#stop').hide();
        $('#minutesTxt').show();
    });
});
