const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = '50px serif';
ctx.fillText('Hello world', 50, 90);

class Duck {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = 20;
    }
    update() {
        this.x = this.x - this.directionX;
        if(this.x < 0) {
            health--;
        }
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let health = 10;
var duck = new Duck();
let ducks = [];

function newDuck() {
    if (health > 0) {
        ducks.push(new Duck());
    }

    for (let i = 0; i < ducks.length; i++) {
        ducks[i].update();
        ducks[i].draw();
       
    }


}

function start(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var rand = Math.floor(Math.random() * (6000000) + 5);
    setTimeout(newDuck(), 10000);
    requestAnimationFrame(start);
    
}

/* game end criteria: if health goes to zero
health decreases if duck's x position is at 0
click to remove duck / pause it's position
score increases every duck you pause/remove
*/
start(0);
