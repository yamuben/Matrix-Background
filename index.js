const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const nums = "01";

const alphabet = nums;

const fontSize = 10;
const columns = canvas.height / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, (canvas.height)*10);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, rainDrops[i] * fontSize, i * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 100);

//................................................................


const fontSize20 = 25;
const columns20 = canvas.width / fontSize20;

const rainDrops20 = [];

for (let x = 0; x < columns20; x++) {
  rainDrops20[x] = 1;
}

const draw20 = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize20 + "px monospace";

  for (let i = 0; i < rainDrops20.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, rainDrops20[i] * fontSize20, i * fontSize20);

    if (rainDrops20[i] * fontSize20 > canvas.height && Math.random() > 0.975) {
      rainDrops20[i] = 0;
    }
    rainDrops20[i]++;
  }
};
setInterval(draw20, 450);
//................................................................


const fontSize50 = 70;
const columns50 = canvas.width / fontSize50;

const rainDrops50 = [];

for (let x = 0; x < columns50; x++) {
  rainDrops50[x] = 1;
}

const draw50 = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize50 + "px monospace";

  for (let i = 0; i < rainDrops50.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, rainDrops50[i] * fontSize50, i * fontSize50);

    if (rainDrops50[i] * fontSize50 > canvas.height && Math.random() > 0.975) {
      rainDrops50[i] = 0;
    }
    rainDrops50[i]++;
  }
};
setInterval(draw50, 700);
//................................................................


const fontSize35 = 35;
const columns35 = canvas.width / fontSize35;

const rainDrops35 = [];

for (let x = 0; x < columns35; x++) {
  rainDrops35[x] = 1;
}

const draw35 = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize35 + "px monospace";

  for (let i = 0; i < rainDrops35.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, rainDrops35[i] * fontSize35, i * fontSize35);

    if (rainDrops35[i] * fontSize35 > canvas.height && Math.random() > 0.975) {
      rainDrops35[i] = 0;
    }
    rainDrops35[i]++;
  }
};
setInterval(draw35, 450);