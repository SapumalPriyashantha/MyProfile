$("#btnPlay").click(function () {
    $('#seven,#two,#three,#four,#five,#six').css("animation-play-state", "running")
});

$("#btnStop").click(function () {
    $('#seven,#two,#three,#four,#five,#six').css("animation-play-state", "paused")
});