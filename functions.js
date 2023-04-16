function randomNumGenerator(min,max){
    return Math.random()*(max-min)+min;
}

function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        // console.log('return');
        return;
    }
    lastPaintTime = ctime;
    // console.log(lastPaintTime)
    gameEngine();
}

function isCollide(snakeArr){
    // snake bump into himself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y){
            return true;
        }
    }
    // snake bump into walls
    if(snakeArr[0].x > 18 || snakeArr[0].x <= 0 || snakeArr[0].y > 18 || snakeArr[0].y <=0){
        return true;
    }
}

function gameEngine(){
    //Part 1 : Updating the snake array and food
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0 ,y: 0};
        alert('Game Over! Press any key to play again!');
        snakeArr = [{x: 13, y: 15}];
        musicSound.play();
        score = 0;
    }

    // If snake eats the food, increment the snakebody,score and regenerate the food!
    if(snakeArr[0].x===food.x && snakeArr[0].y===food.y){
        foodSound.play();
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        if(score>=highscoreval){
            highscoreval = score;
            localStorage.setItem('highscore',JSON.stringify(highscoreval));
            document.getElementById('highScoreBox').innerHTML= "HighScore: " + highscoreval;
        }
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x , y: snakeArr[0].y + inputDir.y});
        food = {x:Math.round(randomNumGenerator(1,18)) , y:Math.round(randomNumGenerator(1,18))};
        console.log(snakeArr);
    }

    //Moving the sanke
    for(let i = snakeArr.length-2; i>=0; i--){
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //Part 2 : Display the snake.
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snakeBody');
        }
        board.appendChild(snakeElement);
    });
    //Part 2 : Display the food.
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}







