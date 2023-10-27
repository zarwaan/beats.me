document.addEventListener("DOMContentLoaded", function () {
    const audio = document.querySelector("audio");
    const playNextSongLink = document.getElementById("play-next-song-link");

    // Add an event listener to the audio element to listen for the "ended" event.
    audio.addEventListener("ended", function () {
        // When the audio ends, automatically click the "Play Next Song" link.
        playNextSongLink.click();
    });
});


