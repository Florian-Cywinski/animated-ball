// Web Animations API

// To get all relevant elements of the HTML file
const ballImg = document.getElementById('ball');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const reverseBtn = document.getElementById('reverse');
const sppedUpBtn = document.getElementById('speed-up');
const slowDownBtn = document.getElementById('slow-down');

const rollAnimation = [ // To define the roll-animation
    {   // 0 %
        transform: 'rotate(0) translate3D(-50%, -50%, 0)',
        color: 'white'       
    },
    {   // 30 %
        color: 'blue',
        offset: 0.3
    },
    {   // 100 %
        transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
        color: 'white'
    }
];

const rollOptions = {   // To set some options to the roll-animation
    duration: 3000, // 3 sec
    iterations: Infinity
};

const roll = ballImg.animate(rollAnimation, rollOptions);   // To use the Animation API

playBtn.addEventListener('click', () => {
    roll.playbackRate = 1;  // To set the property (Wiedergaberate) of the Animation API to one (the defaul value)
    roll.play();    // To start the animation with the play() methode of the Animation API
});
pauseBtn.addEventListener('click', () => roll.pause());
reverseBtn.addEventListener('click', () => roll.reverse());
sppedUpBtn.addEventListener('click', () => roll.playbackRate = roll.playbackRate * 2);
slowDownBtn.addEventListener('click', () => roll.playbackRate = roll.playbackRate * 0.5)