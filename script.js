/*const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Duck {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.x = canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = 10;
        this.movement = true;
        canvas.addEventListener('click', function (event){
            var x = event.pageX;
            var y = event.pageY;
            console.log('Coordinate' + x);
        })
    }

    update() {
        this.x = this.x - this.directionX;
        if (this.x < 0) {
            health--;
        }
    }

    autoupdate() {
        setInterval(() => {
          //  console.log('Autoupdate');
            if (this.movement) {
                this.x = this.x - this.directionX;
                this.draw();
                if (this.x < 0) {
                    this.movement = false;
                }
            }
        }, 1000);
    }

    draw() {
       // console.log('Draw Method');
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
       // console.log(ducks[i]);
        ducks[i].update();
        ducks[i].draw();
    }
}

function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    newDuck();
    //setTimeout(newDuck(), 10000);
    //var rand = Math.floor(Math.random() * (6000) + 5);
    setTimeout(()=>{
        console.log('Timeout Running');
        newDuck();
    }, 10000);
    requestAnimationFrame(start);
}


click to remove duck / pause it's position
score increases every duck you pause/remove

start(0);
*/

let hero = document.getElementById('hero');
let enemy = document.getElementById('enemy');

hero.addEventListener('click', function(){
    hero.classList.add('jumping');
    if hero.compareDocumentPosition.left
    getBoundingClientRect());
})

hero.addEventListener('animationend', function(){
    hero.classList.remove('jumping');
})