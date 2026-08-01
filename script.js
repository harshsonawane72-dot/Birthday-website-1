const flowers = document.querySelector(".flowers");

for (let i = 0; i < 40; i++) {
  let flower = document.createElement("span");
  flower.innerHTML = "🌻";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (5 + Math.random() * 5) + "s";
  flower.style.fontSize = (20 + Math.random() * 20) + "px";
  flower.style.animationDelay = Math.random() * 5 + "s";
  flowers.appendChild(flower);
}

// Audio file load ki gayi hai
const bdaySong = new Audio('Khat Navjot Ahuja 128 Kbps.mp3');

const gift = document.getElementById("gift");
const wish = document.getElementById("wish");

gift.onclick = function () {
  gift.innerHTML = "💛";

  wish.innerHTML = `
  🎉 Happy Birthday Shreya! 🌻<br><br>
  May your smile always bloom like a sunflower.<br>
  Wishing you happiness, success, good health,
  and endless beautiful memories.<br><br>
  Thank you for being such a wonderful junior and a great friend.<br><br>
  ❤️ — From Suraj ❤️
  `;

  startConfetti();
};

function startConfetti() {

  for (let i = 0; i < 120; i++) {

    let confetti = document.createElement("div");

    confetti.innerHTML = ["🎉","🌻","✨","💛","🎊"][Math.floor(Math.random()*5)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random()*100 + "vw";
    confetti.style.top = "-50px";
    confetti.style.fontSize = (18 + Math.random()*18) + "px";
    confetti.style.transition = "top 4s linear";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    setTimeout(()=>{
      confetti.style.top="110vh";
    },100);

    setTimeout(()=>{
      confetti.remove();
    },4500);
  }

}

// 'Open Your Surprise' button click event
document.getElementById("startBtn").onclick = function(){
  // Button dabate hi gaana play hoga
  bdaySong.play();

  // Aur page smooth scroll ho kar gallery par jayega
  document.querySelector(".gallery").scrollIntoView({
    behavior:"smooth"
  });
};
