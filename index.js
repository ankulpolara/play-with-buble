let hit = document.querySelector('#hit');
let score = 0;
let wrong = 3;
let time = 180;
let bubles = '';
let dummyArray = [];
let storeBuble = [];

function ini() {
    wrong = 3;
    score = 0;
    time = 180;
    bubles = '';
    dummyArray = [];
    storeBuble = [];

    for (let i = 1; i < 170; i++) {
        let random = Math.floor(Math.random() * 30);
        dummyArray.push(random);
        bubles += `<div class="text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px] p-1.5 md:p-3 hover:bg-green-700 cursor-pointer select-none">${random}</div>`;
        storeBuble.push(`<div class="ad text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px] p-1.5 md:p-3 hover:bg-green-700 cursor-pointer select-none">${random}</div>`);
    }

    document.querySelector('.footer').innerHTML = bubles;
    hit.innerText = dummyArray[Math.floor(Math.random() * dummyArray.length)];
    document.querySelector('#score').innerText = score;
    document.querySelector('#span').innerText = wrong;
    startTimer();
    checkGameOverDetect();
}

function secinitial() {
    bubles = '';
    for (let i = 1; i < 181; i++) {
        let random = Math.floor(Math.random() * 30);
        dummyArray.push(random);
        bubles += `<div class="text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px] p-1.5 md:p-3 hover:bg-green-700 cursor-pointer select-none">${random}</div>`;
        storeBuble.push(`<div class="ad text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px] p-1.5 md:p-3 hover:bg-green-700 cursor-pointer select-none">${random}</div>`);
    }
    document.querySelector('.footer').innerHTML = bubles;
    hit.innerText = dummyArray[Math.floor(Math.random() * dummyArray.length)];
}
let timer ;
function startTimer() {
     timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector('#timer').innerText = time;
        } else {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function restartGame() {
    ini();
    clearInterval(timer)
}

function increaseScore() {
    score += 10;
    document.querySelector('#score').innerText = score;
}

function decreaseScore() {
    score -= 10;
    document.querySelector('#score').innerText = score;
}

function gameOver() {
    clearInterval(timer);
    score = 0;
    document.querySelector('#score').innerText = score;
    document.querySelector('#footer').innerHTML = `<div class='scale-150 text-[39px] text-[black] md:mt-[130px] md:ml-[100px] ml-[90px] mt-[90px]'>
        <h2 class='text-red-400'>Game Over ....</h2>
        <h2 class='mt-6 text-green-500'>New Game starting ......</h2>
    </div>`;

    setTimeout(() => {
        restartGame();
    }, 2500);
}

document.querySelector('.restart-game').addEventListener('click', () => {
    restartGame();
});

let footer = document.querySelector('#footer');
footer.addEventListener('click', (e) => {
    let clickedElement = e.target.innerText;

    if (clickedElement == hit.innerText) {
        e.target.style = 'background-color: white';
        increaseScore();
        secinitial();
    } else if (e.target.id == 'footer') {
        alert('Click on a valid number');
    } else {
        e.target.style = 'background-color: red';
        wrong--;
        decreaseScore();
        if (wrong < 1) {
            gameOver();
        } else {
            document.querySelector('#span').innerText = wrong;
        }
    }
});

function checkGameOverDetect() {
    if (wrong < 1) {
        gameOver();
    }
}

ini();
