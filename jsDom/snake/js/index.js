window.onload = function() {

    const cvs = document.getElementById('cvs');
    const ctx = cvs.getContext('2d');
    // box
    const BOX = 20;
    //snake
    var Snakes = [];
        Snakes[0] = {
            x: 10,
            y:3
        }
    // food
    var food = {
        x : Math.floor(Math.random() * 25 ) ,
        y : Math.floor(Math.random() * 25 )
    };
    // score 
        let score = 0;
    // 

    // controll btn
        let ctr;

    // add ctr snake event
    document.addEventListener("keydown",function ctrl(e){
        let key = e.keyCode;
        if( key == 37 && ctr != "RIGHT"){
            ctr = "LEFT";
        }else if(key == 38 && ctr != "DOWN"){
            ctr = "UP";
        }else if(key == 39 && ctr != "LEFT"){
            ctr = "RIGHT";
        }else if(key == 40 && ctr != "UP"){
            ctr = "DOWN";
        }
    });
    // draw
    function draw() {
        // draw map
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(0,0,500,500);

        // draw snake
        for( let i = 0; i < Snakes.length ; i++){
            ctx.fillStyle = ( i == 0 )? "green" : "white";
            ctx.fillRect(Snakes[i].x*BOX, Snakes[i].y*BOX, BOX, BOX);
            
            ctx.strokeStyle = "red";
            ctx.strokeRect(Snakes[i].x*BOX, Snakes[i].y*BOX, BOX, BOX);
        }

        let SnakesX = Snakes[0].x;
        let SnakesY = Snakes[0].y;
        
  

        let newHead = {
            x : SnakesX,
            y : SnakesY
        };
        // draw food
        ctx.fillStyle = "white";
        ctx.fillRect(food.x*BOX, food.y*BOX, BOX, BOX);
        //  
        

        //  ctrl snake
        if( ctr == "LEFT") newHead.x -=1;
        if( ctr == "UP") newHead.y -= 1;
        if( ctr == "RIGHT") newHead.x += 1;
        if( ctr == "DOWN") newHead.y += 1; 

       
        // snake move
        
        

        // eat food
        if(newHead.x === food.x && newHead.y === food.y){
            console.log('eat');
            food.x =  Math.floor(Math.random() * 25 ) ;
            food.y = Math.floor(Math.random() * 25 ) ;
        }
        else
            Snakes.pop();

           
        // gameover
        if(newHead.x < 0 || newHead.x >= 25 || newHead.y < 0 || newHead.y >= 25)
            clearInterval(gamePlay);
        if(collision(newHead, Snakes))
            clearInterval(gamePlay);
        
        function collision(head, snake){
            for(let i = 0; i < snake.length; i++){
                if(head.x == snake[i].x && head.y == snake[i].y){
                    return true;
                }
            }
                return false;
        }
            
        Snakes.unshift(newHead);
    }    

    let gamePlay = setInterval(draw,100);

}

