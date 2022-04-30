const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0X";

const alphabet = nums;

let fontSize = 15; //1600
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 0;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < rainDrops.length; i++) {
    context.fillStyle = `rgba(0, 255, 0, ${Math.random()})`;
    context.font = Math.floor(Math.random() * fontSize) + "px monospace";

    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, rainDrops[i] * fontSize, i * fontSize);

    if (rainDrops[i] * fontSize > canvas.width && Math.random() > 0.575) {
      rainDrops[i] = 0;
      fontSize = Math.floor(Math.random() * fontSize) + rainDrops.length / 2;
    }

    rainDrops[i]++;
    // console.log(":::index:::",i, "==",rainDrops[i]);
  }
  // console.log("###",rainDrops )
};
// draw()
// draw()
setInterval(draw, 100);
