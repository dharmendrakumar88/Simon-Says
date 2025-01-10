let start = false;
let level = 0;
let gameseq = [];
let userseq = [];
let random = ["yellow", "green", "red", "blue"];
let h2 = document.querySelector("h2");

// Start game with a click anywhere on the page, not just a keypress
document.body.addEventListener("click", function() {
  if (start == false) {
    console.log("Game is starting");
    start = true;
    levelup();
  }
});

// Flash the button when it's part of the game sequence
function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function() {
    btn.classList.remove("flash");
  }, 250);
}

// Flash the button when the user presses it
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function() {
    btn.classList.remove("userflash");
  }, 250);
};

// Level up function
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  // Random button flash
  let randomindx = Math.floor(Math.random() * 4);
  let randomclr = random[randomindx];
  let randombtn = document.querySelector(`.${randomclr}`);
  gameseq.push(randomclr);
  console.log(gameseq);
  gameflash(randombtn);
}

// Check user's answer
function checkAns(indx) {
  if (userseq[indx] === gameseq[indx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key or click anywhere to start again.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    restart();
  }
}

// Button press event
function btnpress() {
  console.log(this);
  let btn = this;
  userflash(btn);
  userclr = btn.getAttribute("id");
  userseq.push(userclr);
  console.log(userclr);
  checkAns(userseq.length - 1);
}

// Add click event listener to all buttons
let allbtn = document.querySelectorAll(".btnbox");
for (btn of allbtn) {
  btn.addEventListener("click", btnpress);
}

// Restart game
function restart() {
  start = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
