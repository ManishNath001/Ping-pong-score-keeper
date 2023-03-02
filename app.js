
const resetbtn=document.querySelector('#reset');
const playto=document.querySelector('#playTo');

const p1={
    score:0,
    button: document.querySelector('#p1'),
    display: document.querySelector('#p1display')
};

const p2={
    score:0,
    button: document.querySelector('#p2'),
    display: document.querySelector('#p2display')
};

let winningscore;
let isGameOver=false;

function updateScores(player, opponent)
{
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningscore)
        {
            isGameOver=true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score;
    }   
}

//score increment player1
p1.button.addEventListener('click', ()=>{
    updateScores(p1,p2);
})


//score increment player2
p2.button.addEventListener('click', ()=>{
    updateScores(p2,p1)
})

//playto select
playto.addEventListener('change', function(){
    winningscore=parseInt(this.value);
    reset();
})

//reset button
resetbtn.addEventListener('click',reset)

function reset(){
    isGameOver=false;
    p1.score=0;
    p2.score=0;
    p1.display.textContent=p1.score;
    p2.display.textContent=p2.score;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-danger', 'has-text-success');
    p1.button.disabled=false;
    p2.button.disabled=false;
}

