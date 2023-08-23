
  // document.querySelector('.audio').volume = 0.2;
 
 
 
 
 let hit = document.querySelector('#hit')
 var score ;
 var wrong  ;
//  let parser = new DOMParser();
  

  let dummyArray = [];
var bubles;

var storeBuble = []
function ini () {
  wrong = 3
  score = 0 ;
   bubles  ='' ;
    for( let i = 1 ; i < 170 ; i ++){
     let random =   Math.floor(Math.random()*30)
     dummyArray.push(random)
      bubles +=`  <div class=" text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px]       p-1.5 md:p-3 hover:bg-green-700 cursor-pointer  select-none">${random}</div>`
      storeBuble.push(`<div class="ad text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px]       p-1.5 md:p-3 hover:bg-green-700 cursor-pointer  select-none">${random}</div>`) 
    }
    document.querySelector('.footer ').innerHTML = bubles;
    hit.innerText =  dummyArray[ Math.floor(Math.random()*30)];
    
};

function secinitial () {
  bubles  ='' ;
  document.querySelector('#span').innerHTML = wrong;
  for( let i = 1 ; i < 181 ; i ++){
    let random =   Math.floor(Math.random()*30)
    dummyArray.push(random)
    bubles +=`  <div class=" text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px]       p-1.5 md:p-3 hover:bg-green-700 cursor-pointer  select-none">${random}</div>`
    storeBuble.push(`<div class="ad text-[10px] md:text-[17px] buble bg-green-500 rounded-full md:w-[4%] text-center hover:scale-110 hover:shadow-lg px-[9px]       p-1.5 md:p-3 hover:bg-green-700 cursor-pointer  select-none">${random}</div>`)  
   }
   document.querySelector('.footer ').innerHTML = bubles;
   hit.innerText =  dummyArray[ Math.floor(Math.random()*30)];
   //FOR DETECTING IF GAME IS OVER 
   checkGameOverDetect();
}




function initialTime () {
  var time = 180
    timeint =    setInterval(() => {
      if(time>0 ){ 
            time--; 
            // console.log(time);
            document.querySelector('#timer').innerText = time;  
          }
          else {
            clearInterval(timeint);
          // let gameOver =    document.querySelector('.restart ');;
          // console.log(gameOver);
          // gameOver.classList.add('active')
          let footer = document.querySelector('#footer')
         footer.innerHTML = `  <div id="gameover" class="w-[30%]  bg-[#e69641e5] justify-center mx-auto mt-24 flex flex-col gap-4 p-10 rounded-xl shadow-xl"> 
         <p>Game Over </p>
         <button class = ' restart-div w-[70%] bg-blue-400 hover:bg-blue-500 text-white rounded-xl py-1 px-3 '>Restart</button> `
        } 
        
     restartGame()
        // }   
      }, 1000);
    
}
 
 function restartGame () {

  let button = document.querySelector('.restart-div')
  if (button != null)
    alert('You are Time Out')
      button.addEventListener('click', () => {
        score = 0 ;
    document.querySelector('#score').innerText = score ; 
        ini();
        initialTime();
      })
 }

ini();
 initialTime();

  // const AllBuble =      document.querySelectorAll('.buble'); 


 let clickelement;
let footer = document.querySelector('#footer');
 footer.addEventListener('click' , (e)=>{
    clickelement = e.target.innerText;
 if (clickelement ==hit.innerText){
  e.target.style = 'background-color : white'
    increaseScore();
 secinitial();
    // initialBuble()
 }
 else if(e.target.id == 'footer'){
  // e.target.style = 'background-color : white';
  console.log('you click on the footer');
  alert('click valid number')
 }
 else{
e.target.style = 'background-color : red';
document.querySelector('#footer').style = 'background-color : white'
wrong-=1 ;
decreaseScore()

 }
 })


 function increaseScore() {
    score+=10
    document.querySelector('#score').innerText = score ;
 }
 function decreaseScore() {
    score-=10
    document.querySelector('#score').innerText = score ;
 }

   /////////////////////////////////restart-game button////////////

  //  GAME OVER FUNCTION 
   function gameOver(){
    clearInterval(window.timeint);  
    clearInterval(window.checkgameover);                    
    score = 0 ;
    document.querySelector('#score').innerText = score ;
    document.querySelector('#footer').innerHTML = `<div class = ' scale-150 text[39px] text-[black] md:mt-[130px] md:ml-[100px] ml-[90px] mt-[90px]'>
      <h2 class=' text-red-400'>Game Over ....</h2>

      <h2 class ='mt-6 text-green-500 '> New Game starting ...... </h2>
    </div>` ; 

        setTimeout(() => {
          wrong = 3;
          secinitial();
          initialTime(); 
        }, 2500);
   }
            //  RESTART BUTTON IN HTML  PE ADDEVENTLISTENER 
   document.querySelector('.restart-game').addEventListener('click', ()=>{
    
 gameOver();
   })

 var  checkgameover ;
 function checkGameOverDetect () {
   checkgameover =  setInterval(()=>{
    document.querySelector('#span').innerHTML = wrong;

    if(wrong < 1){
     alert(`Game over...   you choose 3 time wrong number `);
     alert(' Click ok to start New Game  .....')
      gameOver();
    }
   },500)

 }
checkGameOverDetect();


//   function showhint(){
// document.querySelector('.hint-div').addEventListener('click',()=>{
//     for (let i = 0; i < 170; i++) {
//       if (dummyArray[i] == hit.innerText) {
//           const ele = parser.parseFromString(storeBuble[i], 'text/html');
//           ele.body.querySelector('.ad').classList.add('ankul')
//           console.log(ele.body.querySelector('.ankul'));
//       }
//     }
//   })
// }
  
  
  
//  showhint()
 

