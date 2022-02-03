let hero = document.getElementById('hero');
let enemy = document.getElementById('enemy');
//let enemy2 = document.getElementById('enemy2');
let playButton = document.querySelector('.play');
let restartButton = document.querySelector('.restart');
let playing = false;

//Manipulating Classes:
function heroAdd() {
    hero.classList.add('jumping');
}

function heroRemove() {
    hero.classList.remove('jumping');
    jumps.innerText++;
    announce.innerText = ('Keep going! Your score is:');
}

function heroMoves() {
    hero.addEventListener('click', heroAdd);
    hero.addEventListener('animationend', heroRemove);
}

function stopHero() {
    hero.removeEventListener('click', heroAdd);
    hero.removeEventListener('animationend', heroRemove);
}

function stopEnemy() {
    enemy.classList.remove('enemy1');
}

/* function stopEnemy2(){
    enemy.classList.remove('enemy2');
} */

//Game Logic, checking collision values
function gameLogic() {
    setInterval(function () {
        let enemyX = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));

        let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));

        /*let enemy2X = parseInt(window.getComputedStyle(enemy).getPropertyValue('left')); */

        if (enemyX < 50 && heroTop > 300) {
            announce.innerText = ('Oops! You lost, your score is:');
            stopEnemy();
            playing = false;
          //  console.log(playing);
        }

        /*if (jumps.innerText == 5){
            announce.innerText = ("It's going to get harder!");
            stopEnemy();
            enemy2.classList.add('enemy2');
        } */

        if (jumps.innerText == 10) {
            announce.innerText = ("Congratulations! You win!");
            stopEnemy();
            stopHero();
            playing = false;
           // console.log(playing);
        }
    }, 100);
}

//Start Game function and Buttons
function startGame() {
    playing = true;
    heroMoves();
    gameLogic();
}

restartButton.disabled = true;

playButton.addEventListener('click', function () {
    startGame();
    enemy.classList.add('enemy1');
    restartButton.disabled = false;
    console.log(playing);
})

restartButton.addEventListener('click', function () {
    jumps.innerText = 0;
    announce.innerText = ('Goodluck here we go!');
    stopHero();
})

//console.log(playing);