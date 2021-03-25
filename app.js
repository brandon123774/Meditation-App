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
        song.play();
    });
};

app();