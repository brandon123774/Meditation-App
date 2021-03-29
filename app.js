var app = () => {
    var song = document.querySelector('.song');
    var play = document.querySelector('.play');
    var outline = document.querySelector('.moving-outline circle');
    var video = document.querySelector('.vid-container video');

    //Sounds
    var sounds = document.querySelectorAll('.sound-picker button');

    //Time display
    var timeDisplay = document.querySelector('.time-display');
    var timeSelect = document.querySelectorAll('.time-select button')

    //length of the outline 
    var outlineLength = outline.getTotalLength();
    console.log(outlineLength);

    //Duration
    var fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //Pick different sounds
    sounds.forEach(sound => {
        sound.addEventListener('click', function()  {
            song.src = this.getAttribute('data=sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        })
    })

    //Play Sound
    play.addEventListener('click', () =>    {
        checkPlaying(song);
    });

    //Select Sound
    timeSelect.forEach(option   =>  {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = '${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}';
        });
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

        // Animate the text
        timeDisplay.textContent = '${minutes}:${seconds}';

        if(currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            video.pause();
        }

    };
};

app();