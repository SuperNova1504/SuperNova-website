let score = JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};

updateScoreElement();
/*if(!score){
    score = {
        wins:0,
        losses:0,
        ties:0
    };
}*/

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let res;

    if(playerMove === 'Scissors'){
        if(computerMove === 'Rock') res ='You Lose!';
        else if(computerMove === 'Paper') res ='You Win!';
        else if(computerMove === 'Scissors') res ='Tie';
    }
    else if(playerMove === 'Paper'){
        if(computerMove === 'Rock') res ='Tie';
        else if(computerMove === 'Paper') res ='You Lose!';
        else if(computerMove === 'Scissors') res ='You Win!';
    }
    else if(playerMove === 'Rock'){
        if(computerMove === 'Rock') res ='Tie';
        else if(computerMove === 'Paper') res ='You Lose!';
        else if(computerMove === 'Scissors') res ='You Win!';
    }

    if(res === 'You Win!'){
        score.wins += 1;
    }
    else if(res === 'You Lose!'){
        score.losses += 1;
    }
    else if(res === 'Tie'){
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    
    updateScoreElement();

    document.querySelector('.js-res').
    innerHTML = res;

    document.querySelector('.js-moves').
    innerHTML = `You
<img src="images/${playerMove} emoji.png" class="move">
<img src="images/${computerMove} emoji.png" class="move">
Computer`;

}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins:${score.wins},    Losses:${score.losses},    Ties:${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >=1/3 && randomNumber <2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber >=2/3 && randomNumber <1){
        computerMove = 'Scissors';
    }

    return computerMove;
}