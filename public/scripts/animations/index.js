const circles = document.querySelector("#circles");
let c = 0

for (c = 0; c <= 35; c++) {
    const li = document.createElement("li");
    const size = ((Math.random() * (20 - 5) + 5) / 10).toFixed(1);
    const position = Math.random() * (99 - 1) + 1;
    const opacity = String(Math.floor(Math.random() * (7 - 1) + 1));
    const delay = Math.random() * (1000 - 50) + 50;
    const duration = Math.random() * (6 - 3) + 3;

    li.style.width = `${size}rem`;
    li.style.height = `${size}rem`;
    li.style.left = `${position}%`;
    li.style.background = `#ffffff${opacity + opacity}`;
    li.style.animationDelay = `${delay}ms`;
    li.style.animationDuration = `${duration}s`;

    circles.appendChild(li);
}
