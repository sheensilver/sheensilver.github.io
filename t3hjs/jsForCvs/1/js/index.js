treasureImg = new Image;
treasureImg.src = 'js/img/treasure.jpg';
userImg = new Image;
userImg.src = "js/img/user.jpg";
trapImg = new Image;
trapImg.src = "js/img/trap.jpg";



// 

var cvs = document.getElementById('cvs');
        var ctx = cvs.getContext('2d');

// 



var matrix = [
    [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, , 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    
];
// 


function Trap(X,Y) {
    this.x = X,
    this.y = Y
}


var traps =[];
trap0 = new Trap(0, 1); traps.push(trap0);
trap1 = new Trap(1, 0); traps.push(trap1);
trap2 = new Trap(1, 1); traps.push(trap2);
trap3 = new Trap(9, 8); traps.push(trap3);
trap4 = new Trap(8, 8); traps.push(trap4);
trap5 = new Trap(8, 9); traps.push(trap5);

Trap.prototype.draw = function() {
    ctx.drawImage(trapImg, this.x*50 , this.y*50, trapW, trapH);    
}
console.log(traps);


var User = {
    img : userImg,
    userX : 0,
    userY: 0,
    width: 50,
    height:50,
    // 
    collec : 0,
    hearts: 4,

    // 
    draw: function() {
        ctx.drawImage(this.img, this.userX * 50, this.userY * 50, this.width, this.height);
    },

    // 

    moveLeft: function() {
        if(User.userX > 0)
        User.userX -= 1;
    },
    moveUp: function () {
        if(User.userY > 0)
        User.userY -= 1;
    },
    moveRight: function() {
        if(User.userX < 9)
        User.userX += 1;
    },
    moveDown: function() {
        if(User.userY < 9)
        User.userY += 1;
    }

};
var treasureW = 50;
var tresureH = 50;

var trapW = 50;
var trapH = 50;

// 
document.addEventListener('keydown',function(e) {
    
    switch(e.keyCode) {
        case 37 :
            console.log('left');
            User.moveLeft();
            break;
        case 38 :
            console.log('up');
            User.moveUp();
            break;
        case 39 :
            console.log('right');
            User.moveRight(); 
            break;
        case 40 :
            User.moveDown();
            console.log('down');
            break;  
    }
})

function draw(ctx) {
    for(let j = 0; j <= 9; j++){
        for(let i = 0; i <= 9; i++){
            if(matrix[i][j] === 1)
                ctx.drawImage(treasureImg, i*50 , j*50, treasureW, tresureH);
        }
    }
}


window.onload = () => {
    setInterval(function() {
        var cvs = document.getElementById('cvs');
        var ctx = cvs.getContext('2d');
    
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(0,0,500,500);
        
        draw(ctx);
        User.draw();





        for(let j = 0; j <= 9; j++){
            for(let i = 0; i <= 9; i++){
                for(let t = 0; t < traps.length; ++t){
                    if(traps[t].x === i && traps[t].y === j)
                        traps[t].draw();
                    else if(traps[t].x === User.userX && traps[t].y === User.userY){
                        traps.splice(t, 1);
                        User.hearts -= 1;
                    }
                }
            }
        }
        
        if(User.hearts <= 0)
            alert('false');
        else if(User.collec === 1)
            alert('You Win!');
    },1);   

}


