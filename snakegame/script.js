function moveSnake(){

    if(!paused){

        const head = {x: snake[0].x + DOMException, y: snake[0].y + dy};
        snake.unshift(head);
        if(head.x === food.x && head.y === food.y){
            generateFood();
            score +=10;
            if(gamespeed > 0){
                gamespeed -= 5;
            }
        }else {
            snake.pop();
        }

        if(checkcollision()){
            gameOver = true;
            setTimeout(() => {
                location.reload();  
            }, 5000);
        }
    }
}