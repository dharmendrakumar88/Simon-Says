let start =false;
let level = 0;
let gameseq = [];
let userseq = [];
let random = ["yellow","green","red","blue"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
if(start==false){
  console.log("game is start");
  start = true;
  levelup();
}
})
function gameflash(btn){
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash"); 
  },250);
};
function userflash(btn){
  btn.classList.add("userflash")
  setTimeout(function(){
    btn.classList.remove("userflash"); 
  },250);
};


function levelup(){
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
//random btn flash
let randomindx = Math.floor(Math.random()*4);
let randomclr = random[randomindx];
let randombtn = document.querySelector(`.${randomclr}`)
gameseq.push(randomclr);
console.log(gameseq);
gameflash(randombtn);
}
function checkAns(indx){
  if (userseq[indx] === gameseq[indx]){
      if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
      }
  }else{
    h2.innerHTML =`Game Over ! your score was <b>${level}<b> <br> Press Any key To Start Again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },200)
    restart();
  }
}



function btnpress(){
  console.log(this);
  let btn = this;
  userflash(btn);
  userclr = btn.getAttribute("id");
  userseq.push(userclr);
  console.log(userclr);
  checkAns(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btnbox");
for (btn of allbtn) {
btn.addEventListener("click",btnpress);
}

function restart(){
start = false;
gameseq = [];
userseq = [];
level =0;


}
