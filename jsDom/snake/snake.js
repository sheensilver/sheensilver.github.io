window.onload = function () {
    
    const c = document.getElementById('cvs');
    const ctx = c.getContext('2d');

    const BOX = 20;
    
    let ctr;
    let gamePlay;
    let score = 0;
    let hightScore = 0;

    // create snake
    let snake = [];
    snake[0] ={
        x: 2,
        y: 4
    };
    // add control snake btn
    document.addEventListener('keydown',function(e) {
        let key = e.keyCode;
        if( key == 37 && ctr != "RIGHT"){
            ctr = "LEFT";
        }else if(key == 38 && ctr != "DOWN"){
            ctr = "UP";
        }else if(key == 39 && ctr != "LEFT"){
            ctr = "RIGHT";
        }else if(key == 40 && ctr != "UP"){
            ctr = "DOWN";
        }else if(key == 83)
            ctr = "STOP";
        
    });
    
    // create food
    let food = {
        x : Math.floor(Math.random() * 25 ) + 2,
        y : Math.floor(Math.random() * 25 ) + 4,
    }


    function newGame() {
        score = 0;
        snake = [];
        snake[0] ={
            x: 2,
            y: 4
        }
        gamePlay = setInterval(draw,100);

    }
    // check hight score
    function checkHightScore(score) {
        if(score > hightScore)
            hightScore = score;
    }



    function draw() {
        //  draw display
        ctx.fillStyle = '#f2f3f5';
        ctx.fillRect(0, 0, 580, 620); 
        //
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(40, 80, 500, 500); 
        // draw snake
        for(let i = 0; i < snake.length; ++i){
            ctx.fillStyle = ( i == 0 )? "green" : "red";
            ctx.fillRect(snake[i].x * BOX, snake[i].y * BOX, BOX, BOX );

            ctx.strokeStyle = "green";
            ctx.strokeRect(snake[i].x * BOX, snake[i].y * BOX, BOX, BOX );
        }
        // draw food
        ctx.fillStyle = "red";
        ctx.fillRect(food.x * BOX, food.y * BOX, BOX, BOX);
        // control game
        var snakeHead = {
             x: snake[0].x,
             y: snake[0].y
        }
        if( ctr == "LEFT") snakeHead.x -=1;
        if( ctr == "UP") snakeHead.y -= 1;
        if( ctr == "RIGHT") snakeHead.x += 1;
        if( ctr == "DOWN") snakeHead.y += 1;           
        // snake eat 
        if(snakeHead.x === food.x && snakeHead.y === food.y){
            // +score and create new food
            score++;
            food.x = Math.floor(Math.random() * 25 ) + 2;
            food.y = Math.floor(Math.random() * 25 ) + 4;
        }
        else //remove tail
            snake.pop();
        // check hight score
            checkHightScore(score);
        // draw + score 
        ctx.font = "30px Verdana";
        ctx.fillText("SCORE :", 2 * BOX ,2 * BOX );
        
        ctx.font = "30px Verdana";
        ctx.fillText(score, 9 * BOX ,2 * BOX );
        
        //  draw hight score
        ctx.font = "20px Verdana";
        ctx.fillText("hight score :", 15 * BOX ,1 * BOX );

        ctx.font = "20px Verdana";
        ctx.fillText(hightScore, 22 * BOX ,1 * BOX );
        // stopbtn
        ctx.font = "20px Verdana";
        ctx.fillText("Press 'S' to stop this game", 15 * BOX ,3 * BOX );
        // new game btn
        ctx.font = "15px Verdana";
        ctx.fillText("Press 'space' to start new game", 2 * BOX , 3 * BOX );

        
        // game over && start new game
        if(snakeHead.x < 2 || snakeHead.x >= 27 || snakeHead.y < 4 || snakeHead.y >= 29){
            newGame();
            setTimeout(function () {alert('Game Over')},200);
            clearInterval(gamePlay); 
        }
        for(let i = 0; i< snake.length; ++i)
            if(snakeHead.x === snake[i].x && snakeHead.y === snake[i].y){
                
                setTimeout(function () {alert('Game Over')},100);newGame();
                clearInterval(gamePlay);

            }
        //  add head
       snake.unshift(snakeHead);

        function newGame() {
                score = 0;
                snake = [];
                ctr = "NEW";
                snakeHead.x = 2;
                snakeHead.y = 4;
                gamePlay = setInterval(draw,100);

            }


    }

    

   



    gamePlay = setInterval(draw, 100);

}