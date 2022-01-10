var eventButton = document.getElementById("event-button");
var eventInfo = document.getElementById("event-info");


var caliTime = document.querySelector("#time-cali");
var currentTime = moment();

var instaUpdate = function () {
    var now = moment();
    var timeFormat = now.format("MMMM Do YYYY, h:mm:ss A")
    
    caliTime.textContent = timeFormat;
}

function formShow() {
    eventButton.classList.add("hide");
    eventInfo.classList.remove("hide");

}


setInterval(instaUpdate, 1000);

instaUpdate();

eventButton.addEventListener("click", formShow)