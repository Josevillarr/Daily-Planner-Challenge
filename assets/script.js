var caliTime = document.querySelector("#time-cali");
var currentTime = moment();


var instaUpdate = function () {
    var now = moment();
    var timeFormat = now.format("MMMM Do YYYY, h:mm:ss A")
    
    caliTime.textContent = timeFormat;
}

setInterval(instaUpdate, 1000);

instaUpdate();

