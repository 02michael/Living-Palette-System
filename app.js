const palettes = [
  {
    name: "Horizon Shift",
    colors: ["#0B132B", "#1C2541", "#3A506B", "#5BC0BE", "#F4F4F4", "#FF6B6B"]
  },
  {
    name: "Quiet Voltage",
    colors: ["#1A1A1D", "#4E4E50", "#6F2232", "#950740", "#C3073F", "#EAEAEA"]
  },
  {
    name: "Filtered Reality",
    colors: ["#1F1D36", "#3F3351", "#864879", "#E9A6A6", "#F0F0F0", "#2E2E2E"]
  },
  {
    name: "Desert Bloom",
    colors: ["#3E2723", "#6D4C41", "#D7CCC8", "#FFAB91", "#FF7043", "#FFF3E0"]
  },
  {
    name: "Cosmic Ink",
    colors: ["#0F0F1B", "#1B1B2F", "#16213E", "#533483", "#E94560", "#F5F5F5"]
  }
];

let current = 0;
let locked = false;

const swatchContainer = document.querySelector(".swatches");
const nameEl = document.getElementById("paletteName");

function applyPalette(index) {
  const palette = palettes[index];
  nameEl.textContent = palette.name;

  palette.colors.forEach((color, i) => {
    document.documentElement.style.setProperty(`--c${i + 1}`, color);
  });

  swatchContainer.innerHTML = "";
  palette.colors.forEach((color) => {
    const div = document.createElement("div");
    div.className = "swatch";
    div.style.background = color;
    swatchContainer.appendChild(div);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (locked) return;
  current = (current + 1) % palettes.length;
  applyPalette(current);
});

document.getElementById("lockBtn").addEventListener("click", () => {
  locked = !locked;
  const btn = document.getElementById("lockBtn");
  btn.classList.toggle("locked", locked);
  btn.textContent = locked ? "Locked" : "Lock";
});

applyPalette(current);
