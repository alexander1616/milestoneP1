let hero:(HTMLElement | unknown)= document.getElementById('hero');
let enemy = document.getElementById('enemy');
//let enemy2 = document.getElementById('enemy2');
let playButton = document.querySelector('.play');
let restartButton = document.querySelector('.restart');
let playing = false;
let jumps = document.getElementById('jumps');
let announce = document.getElementById('announce');

//Manipulating Classes:
function heroAdd() {
    if(hero != null) {
        (hero as HTMLElement).classList.add('jumping');
    }
}

function heroRemove() {
    if(hero != null){
        (hero as HTMLElement).classList.remove('jumping');
        (jumps as any).innerText++;
        (announce as HTMLElement).innerText = ('Keep going! Your score is:');
    }
}

function heroMoves() {
    (hero as HTMLElement).addEventListener('click', heroAdd);
    (hero as HTMLElement).addEventListener('animationend', heroRemove);
}

function stopHero() {
    (hero as HTMLElement).removeEventListener('click', heroAdd);
    (hero as HTMLElement).removeEventListener('animationend', heroRemove);
}

function stopEnemy() {
    (enemy as HTMLElement).classList.remove('enemy1');
}

/* function stopEnemy2(){
    enemy.classList.remove('enemy2');
} */

//Game Logic, checking collision values
function gameLogic() {
    setInterval(function () {
        let enemyX = parseInt(window.getComputedStyle((enemy as HTMLElement)).getPropertyValue('left'));

        let heroTop = parseInt(window.getComputedStyle((hero as HTMLElement)).getPropertyValue('top'));

        /*let enemy2X = parseInt(window.getComputedStyle(enemy).getPropertyValue('left')); */

        if (enemyX < 50 && heroTop > 300) {
            (announce as HTMLElement).innerText = ('Oops! You lost, your score is:');
            stopEnemy();
            stopHero();
            playing = false;
          //  console.log(playing);
        }

        /*if (jumps.innerText == 5){
            announce.innerText = ("It's going to get harder!");
            stopEnemy();
            enemy2.classList.add('enemy2');
        } */

        if ((jumps as any).innerText == 10) {
            (announce as HTMLElement).innerText = ("Congratulations! You win!");
            stopEnemy();
            stopHero();
            playing = false;
           // console.log(playing);
        }
    }, 100);
};

//Start Game function and Buttons
function startGame() {
    playing = true;
    heroMoves();
    gameLogic();
    (enemy as HTMLElement).classList.add('enemy1');
    (restartButton as any).disabled = false;
    console.log(playing);
};

(restartButton as any).disabled = true;

(playButton as HTMLElement).addEventListener('click', function () {
    var timeleft = 3;
    var timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(timer);
        }
        (announce as HTMLElement).innerText = ("Game starts in: " + timeleft);
        timeleft -=1;
    }, 1000);

    setTimeout(startGame, 4000);
    
});

(restartButton as HTMLElement).addEventListener('click', function () {
    //jumps.innerText = 0;
    //announce.innerText = ('Goodluck here we go!');
    //stopHero();
    location.reload();
});

//console.log(playing);