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
let playButton = document.querySelector('.play');
let restartButton = document.querySelector('.restart');
let playing;

restartButton.disabled = true;

playButton.addEventListener('click', function () {
    enemy.classList.add('enemy1');
    restartButton.disabled = false;
    startGame();

})

restartButton.addEventListener('click', function () {
    jumps.innerText = 0;
    announce.innerText = ('Goodluck here we go!');
})

function heroAdd(){
    hero.classList.add('jumping');
}

function heroRemove(){
    hero.classList.remove('jumping');
    jumps.innerText++;
    announce.innerText = ('Keep going! Your score is:');
}

function heroMoves(){

    //Adding the jumping class to the hero which allows it to jump
    hero.addEventListener('click', heroAdd);

    //Removing the jumping class on the hero after animation ends
    hero.addEventListener('animationend', heroRemove);

    if (playing === false){
        hero.removeEventListener('click', heroAdd);
        hero.removeEventListener('animationend', heroRemove);
    }
}
//set intervals to find x values for hero, enemy, and top value for hero

function gameLogic(){
setInterval(function () {
    let enemyX = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));

    if (enemyX < 50 && heroTop > 300) {
        announce.innerText = ('Oops! You lost, your score is:');
        enemy.classList.remove('enemy1');
        playing = false;
        return false;
    }

    if (jumps.innerText == 10) {
        announce.innerText = ("Congratulations! You win!");
    }
}, 100);
}

function startGame(){
    playing = true;
    heroMoves();
    gameLogic();
    
}