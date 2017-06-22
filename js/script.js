var button = document.getElementById("trailer-button");
var ytvideo = document.getElementById("youtube-video");

button.onclick = function () {
    button.classList.add("trailer-opacity");
    ytvideo.classList.add('video-opacity');
}