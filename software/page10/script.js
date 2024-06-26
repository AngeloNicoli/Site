const player = document.getElementById('player');
const gameCanvas = document.getElementById("game-container");
const gameContainer = document.getElementById('game-container');
const textGame = document.createElement('div');
const HUD = document.createElement('div');
textGame.className = "text"

//console.log(player.getBoundingClientRect().left)
//console.log(player.getBoundingClientRect().right)

let score = 0;
let generalscore = 0;
let Level = 1;
let direction = [(0,0)];
let Coin_Scene = {};
console.log(Coin_Scene)

player.style.left = `${Math.random() * (gameContainer.offsetWidth - 20)}px`;

// Function to create and append coins to the game container

function createCoin(nCoin) {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.left = `${Math.random() * (gameContainer.offsetWidth - 20)}px`;
    coin.style.top = `${Math.random() * (gameContainer.offsetHeight - 20)}px`;
    gameContainer.appendChild(coin);
    coin.addEventListener('click', collectCoin);
    Coin_Scene["coin" + nCoin] = coin;
    console.log(Coin_Scene)
} 


// Function to move the player with arrow keys
// 'keyup' only when pressed 

document.addEventListener('keydown', (e) =>{
    const speed = 10;
    switch (e.key) {
        case 'ArrowUp':
            player.style.top = `${Math.max(0, player.offsetTop - speed)}px`;
            break;
        case 'ArrowDown':
            player.style.top = `${Math.min(gameContainer.offsetHeight - player.offsetHeight, player.offsetTop + speed)}px`;
            break;
        case 'ArrowLeft':
            player.style.left = `${Math.max(0, player.offsetLeft - speed)}px`;
            break;
        case 'ArrowRight':
            player.style.left = `${Math.min(gameContainer.offsetWidth - player.offsetWidth, player.offsetLeft + speed)}px`;
            break;
    }
});


document.onkeydown = function(e) {
    console.log(e);
    console.log(e.key);
    if (e.key == "Escape"){
        console.log("Open menu");  
        gameContainer.appendChild(HUD);
        HUD.innerHTML = 'Menu';
    }
    if (e.key == "t"){
        console.log("Open menu");  
        HUD.remove();

        //gameContainer.removeChild(Coin_Scene.coin2);
        Coin_Scene.coin2.classList.remove("coin")
        Coin_Scene.coin2.classList.add("coin_select")
        // delete Coin_Scene.coin2;
        console.log(gameContainer);  
        console.log(Coin_Scene)
    }
};



// Function to handle coin collection
function collectCoin() {
    let playerX= player.getBoundingClientRect().x
    let playerY = player.getBoundingClientRect().y

    let coinX = this.getBoundingClientRect().x
    let coinY = this.getBoundingClientRect().y

    console.log((playerX - coinX))
    if (Math.abs(playerX - coinX) < 50){
        console.log("£")
        score++;
        generalscore++;
        this.parentNode.removeChild(this);
        console.log(Coin_Scene)
        var audio = new Audio('coin.wav');
        audio.play();
        if (score == 5){
            Level += 1;
            score = 0;
            if (Level == 4){
                setTimeout(RestartGame, 3000);
                gameContainer.appendChild(textGame);
                textGame.innerHTML = `You Win! <br> Congratulations!`;
                textGame.style.left = '35%';
                textGame.style.top = '30%';
                textGame.style.fontSize = '30px';
            } else {
                PopulateCoin()
            }
        }
        //const newButton = document.createElement('button');
        //newButton.textContent = 'Reset Game!';
        //document.body.appendChild(newButton);
    }
    }


// Create initial coins
function PopulateCoin(){
    for (let i = 0; i < 5; i++) {
        createCoin(i);
    }
}

// Update the score
function updateScene() {
    document.getElementById('Level').textContent = `Level: ${Level}   `;
    document.getElementById('score').textContent = `Score: ${score}   `;
    document.getElementById('total_score').textContent = `Total Score: ${generalscore} `;
    player.style.top = `${Math.max(0, player.offsetTop - 0)}px`;  
    

    for (const key in  Coin_Scene) {
        // console.log(Coin_Scene)
        //console.log(Coin_Scene[key])
        console.log(Coin_Scene[key].style.top)
        console.log(Coin_Scene[key].style.left)
    }
}

function RestartGame(){
   location.reload()
}

function Go_Back() {
    window.location.href = "../../index.html";
    }


// Start the game loop
PopulateCoin()
setInterval(updateScene, 30);

