var app = () => {
    var song = document.querySelector('.song');
    var play = document.querySelector('.play');
    var outline = document.querySelector('.moving-outline circle');
    var video = document.querySelector('.vid-container video');

    //Sounds
    var sounds = document.querySelectorAll('.sound-picker button');

    //Time display
    var timeDisplay = document.querySelector('.time-display');

    //length of the outline 
    var outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    //Duration
    var fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Play Sound
    play.addEventListener('click', () =>    {
        checkPlaying(song);
    });

    //Create a function to stop and play the sounds
    var checkPlaying = song =>  {
    if (song.paused) {
        song.play();
        video.play();
        play.src = './svg/pause.svg'
    } else   {
        song.pause();
        video.pause();
        play.src = './svg/play.svg'
    }

    //Animate the circle for time
    song.ontimeupdate = ()  =>  {
        var currentTime = song.currentTime;
        var elapsed = fakeDuration - currentTime;
        var seconds = Math.floor(elapsed % 60);
        var minutes = Math.floor(elapsed / 60);

        //Progress bar animation
        var progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;
        

    }
};

app();