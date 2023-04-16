// Game variables and constants
let inputDir = {x: 0 , y:0};
const foodSound = new Audio('/music/food.mp3');
const gameOverSound = new Audio('/music/gameover.mp3');
const moveSound = new Audio('/music/move.mp3');
const musicSound = new Audio('/music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;

// fetching the previous highscore form localStorage
let highscoreval;
let highscore = localStorage.getItem('highscore');
if(highscore === null){
    highscoreval = 0;
    localStorage.setItem('highscore',JSON.stringify(highscoreval));
}
else{
    highscoreval = JSON.parse(highscore);
    document.getElementById('highScoreBox').innerHTML= "HighScore: " + highscoreval;}
let snakeArr = [
    {x: 10, y: 9}
]
let food = {x:Math.round(randomNumGenerator(1,17)) , y:Math.round(randomNumGenerator(1,17))}


//Game Functions

//Game Logic

window.requestAnimationFrame(main);
window.addEventListener('keydown',e => {
    musicSound.play();
    inputDir = {x:0, y:1}; //Start the Game
    moveSound.play();
    switch (e.key) {
        case 'ArrowUp':
            console.log('Arrow up');
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case 'ArrowDown':
            console.log('ArrowDown');
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case 'ArrowRight':
            console.log('ArrowRight');
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        case 'ArrowLeft':
            console.log('ArrowLeft');
            inputDir.x = -1;
            inputDir.y = 0;
            break;
    
        default:
            break;
    }
});


//LocalStorage
