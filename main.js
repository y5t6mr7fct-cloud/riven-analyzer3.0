// Coefficienti per categoria
const COEFF = {
  Primary: 1.15,
  Secondary: 1.10,
  Melee: 1.20
};

// Database completo (Primary, Secondary, Melee)
const weapons = [
  // PRIMARY
  { name: "Acceltra", type: "Primary", disposition: 0.65 },
  { name: "Braton", type: "Primary", disposition: 1.35 },
  { name: "Burston", type: "Primary", disposition: 1.45 },
  { name: "Latron", type: "Primary", disposition: 1.35 },
  { name: "Boltor", type: "Primary", disposition: 1.25 },
  { name: "Paris", type: "Primary", disposition: 1.45 },
  { name: "Hek", type: "Primary", disposition: 1.20 },
  { name: "Tiberon", type: "Primary", disposition: 1.10 },
  { name: "Strun", type: "Primary", disposition: 1.30 },
  { name: "Soma", type: "Primary", disposition: 0.70 },
  { name: "Cernos", type: "Primary", disposition: 1.30 },
  { name: "Mutalist Cernos", type: "Primary", disposition: 0.90 },
  { name: "Penta", type: "Primary", disposition: 1.05 },
  { name: "Opticor", type: "Primary", disposition: 0.75 },
  { name: "Ignis", type: "Primary", disposition: 0.80 },
  { name: "Tigris", type: "Primary", disposition: 1.15 },
  { name: "Vaykor Hek", type: "Primary", disposition: 0.85 },
  { name: "Sybaris", type: "Primary", disposition: 1.25 },
  { name: "Grinlok", type: "Primary", disposition: 1.20 },
  { name: "Lanka", type: "Primary", disposition: 0.95 },
  { name: "Arca Plasmor", type: "Primary", disposition: 0.70 },
  { name: "Corinth", type: "Primary", disposition: 1.10 },
  { name: "Phantom Lancer", type: "Primary", disposition: 1.30 },
  { name: "Zhuge", type: "Primary", disposition: 1.15 },
  { name: "Cobra", type: "Primary", disposition: 1.40 },
  { name: "Tysis", type: "Primary", disposition: 0.90 },
  { name: "Stradavar", type: "Primary", disposition: 1.05 },
  { name: "Acceltra Prime", type: "Primary", disposition: 0.60 },
  { name: "Soma Prime", type: "Primary", disposition: 0.65 },
  { name: "Ignis Wraith", type: "Primary", disposition: 0.75 },
  { name: "Tigris Prime", type: "Primary", disposition: 1.00 },  
  { name: "Lanka Prime", type: "Primary", disposition: 0.85 },    
  { name: "Arca Plasmor Prime", type: "Primary", disposition: 0.60 },
  { name: "Corinth Prime", type: "Primary", disposition: 0.95 },
  { name: "Zhuge Prime", type: "Primary", disposition: 1.00 },

  // SECONDARY
  { name: "Lex", type: "Secondary", disposition: 1.25 },
  { name: "Pyrana Prime", type: "Secondary", disposition: 0.65 },
  { name: "Vasto", type: "Secondary", disposition: 1.40 },
  { name: "Sicarus", type: "Secondary", disposition: 1.35 },
  { name: "Aklex", type: "Secondary", disposition: 1.05 },
  { name: "Akmagnus", type: "Secondary", disposition: 1.10 },
  { name: "Dual Cestra", type: "Secondary", disposition: 0.90 },
  { name: "Furis", type: "Secondary", disposition: 1.30 },
  { name: "Hikou", type: "Secondary", disposition: 1.50 },
  { name: "Spira Prime", type: "Secondary", disposition: 0.80 },
  { name: "Twin Rogga", type: "Secondary", disposition: 1.20 },
  { name: "Twin Grakatas", type: "Secondary", disposition: 1.15 },
  { name: "Viper", type: "Secondary", disposition: 1.45 },
  { name: "Zakti", type: "Secondary", disposition: 1.35 },
  { name: "Stug", type: "Secondary", disposition: 1.25 },
  { name: "Acrid", type: "Secondary", disposition: 1.30 },
  { name: "Pandero", type: "Secondary", disposition: 1.10 },
  { name: "Cobra Prime", type: "Secondary", disposition: 0.75 },
  { name: "Euphona Prime", type: "Secondary", disposition: 0.85 },
  { name: "Lato Vandal", type: "Secondary", disposition: 1.15 },
  { name: "Mara Detron", type: "Secondary", disposition: 1.20 },
  { name: "Hema", type: "Secondary", disposition: 0.95 },
  { name: "Kohmak", type: "Secondary", disposition: 1.40 },
  // MELEE
  { name: "Innodem", type: "Melee", disposition: 0.65 },
  { name: "Kronen Prime", type: "Melee", disposition: 0.65 },
  { name: "Nikana Prime", type: "Melee", disposition: 0.60 },
  { name: "Skana", type: "Melee", disposition: 1.35 },
  { name: "Dual Zoren", type: "Melee", disposition: 1.25 },
  { name: "Guandao Prime", type: "Melee", disposition: 0.70 },
  { name: "Galatine", type: "Melee", disposition: 1.20 },
  { name: "Orthos Prime", type: "Melee", disposition: 0.75 },
  { name: "Tipedo", type: "Melee", disposition: 1.30 },
  { name: "Lesion", type: "Melee", disposition: 1.15 },
  { name: "Furax", type: "Melee", disposition: 1.40 },
  { name: "War", type: "Melee", disposition: 1.10 },
  { name: "Hate", type: "Melee", disposition: 1.25 },
  { name: "Anku", type: "Melee", disposition: 1.30 },
  { name: "Nami Skyla", type: "Melee", disposition: 1.05 },
  { name: "Paracesis", type: "Melee", disposition: 0.90 },
  { name: "Redeemer", type: "Melee", disposition: 1.20 },
  { name: "Silva & Aegis", type: "Melee", disposition: 1.15 },
  { name: "Venka Prime", type: "Melee", disposition: 0.80 }
];

// -----------------------------
// FUNZIONE DI FORMATTAZIONE
function formatDisplay(type, value, isDebuff = false) {
  if (!type || isNaN(value)) return "";

  if (type.startsWith("faction")) {
    let multiplierValue = value;
    if(multiplierValue > 1) multiplierValue = 1 + multiplierValue / 100;
    return "x" + multiplierValue.toFixed(2);
  }

  return (isDebuff ? "-" : "+") + value + "%";
}
// -----------------------------

// LISTENER LIVE PER I BUFF
for (let i = 1; i <= 3; i++) {
  const typeEl = document.getElementById(`buff${i}-type`);
  const valueEl = document.getElementById(`buff${i}-value`);
  const displayEl = document.getElementById(`buff${i}-display`);

  function update() {
    const type = typeEl.value;
    const value = parseFloat(valueEl.value);
    displayEl.textContent = formatDisplay(type, value, false);
  }

  typeEl.addEventListener("change", update);
  valueEl.addEventListener("input", update);
}

// LISTENER LIVE PER IL DEBUFF
const dType = document.getElementById("debuff-type");
const dValue = document.getElementById("debuff-value");
const dDisplay = document.getElementById("debuff-display");

function updateDebuff() {
  const type = dType.value;
  const value = parseFloat(dValue.value);
  dDisplay.textContent = formatDisplay(type, value, true);
}

dType.addEventListener("change", updateDebuff);
dValue.addEventListener("input", updateDebuff);

// ELEMENTI HTML
const input = document.getElementById("weaponInput");
const suggestionsBox = document.getElementById("suggestions");
const resultBox = document.getElementById("result");

// AUTOCOMPLETE
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (!value) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  const matches = weapons.filter(w =>
    w.name.toLowerCase().includes(value)
  );

  if (!matches.length) {
    suggestionsBox.classList.add("hidden");
    return;
  }

  matches.forEach(w => {
    const div = document.createElement("div");
    div.className = "suggestion";
    div.innerHTML = `<strong>${w.name}</strong><br><small>${w.type}</small>`;
    div.onclick = () => {
      input.value = w.name;
      showResult(w);
      suggestionsBox.classList.add("hidden");
    };
    suggestionsBox.appendChild(div);
  });

  suggestionsBox.classList.remove("hidden");
});

// FUNZIONE SHOW RESULT
function showResult(w) {
  const metaScore = (w.disposition * COEFF[w.type]).toFixed(2);

  document.getElementById("res-name").textContent = w.name;
  document.getElementById("res-type").textContent = w.type;
  document.getElementById("res-disp").textContent = w.disposition;
  document.getElementById("res-meta").textContent = metaScore;

// BUFF
for (let i = 1; i <= 3; i++) {
  const typeEl = document.getElementById(`buff${i}-type`);
  const valueEl = document.getElementById(`buff${i}-value`);
  const displayEl = document.getElementById(`buff${i}-display`);

  function update() {
    const type = typeEl.value;
    const value = parseFloat(valueEl.value);
    displayEl.textContent = formatDisplay(type, value, false);
  }

  typeEl.addEventListener("change", update);
  valueEl.addEventListener("input", update);
}

// DEBUFF
const dType = document.getElementById("debuff-type");
const dValue = document.getElementById("debuff-value");
const dDisplay = document.getElementById("debuff-display");

function updateDebuff() {
  const type = dType.value;
  const value = parseFloat(dValue.value);
  dDisplay.textContent = formatDisplay(type, value, true);
}

dType.addEventListener("change", updateDebuff);
dValue.addEventListener("input", updateDebuff);
  
  // Calcolo prezzo di base senza buff/debuff
  const baseDisp = w.disposition;
  const priceMin = Math.round(100 + baseDisp * 200);
  const priceMax = Math.round(500 + baseDisp * 600);
  document.getElementById("res-price").innerText = priceMin + " - " + priceMax + " plat";

  resultBox.classList.remove("hidden");
}

// FUNZIONE AVANZATA: BUFF/DEBUFF + LIVELLO RIVEN + PREZZO DINAMICO
document.getElementById("applyRiven").addEventListener("click", () => {
  let multiplier = 1;
  let factionMultiplier = 1;

  // 3 BUFF
  for (let i = 1; i <= 3; i++) {
    const type = document.getElementById(`buff${i}-type`).value;
    const rawValue = document.getElementById(`buff${i}-value`).value.replace(",", ".");
    const value = parseFloat(rawValue) || 0;
    if (value > 0) {
      // BUFF FAZIONE → MOLTIPLICATORE REALE
     if (type.startsWith("faction")) {
  let multiplierValue = value;
// se l'utente inserisce un numero grande (>3), lo interpretiamo come percentuale
if (multiplierValue > 3) {
  multiplierValue = 1 + multiplierValue / 100;
}
factionMultiplier *= multiplierValue;
}
      // BUFF NORMALI (COME PRIMA)
      else if (type === "damage" || type === "crit" || type === "critdmg") {
        multiplier += value / 100 * 1.2;
      } else {
        multiplier += value / 100;
      }
    }
  }

  // Debuff
  const debuffType = document.getElementById("debuff-type").value;
  const rawDebuff = document.getElementById("debuff-value").value.replace(",", ".");
  const debuffValue = parseFloat(rawDebuff) || 0;
  if (debuffValue > 0) {
    if (debuffType.startsWith("faction")) {
  let debuffMultiplier = debuffValue;
  if (debuffMultiplier > 3) {
    debuffMultiplier = 1 + debuffMultiplier / 100;
  }
  factionMultiplier /= debuffMultiplier;
}
    else if (debuffType === "damage" || debuffType === "crit" || debuffType === "critdmg") {
      multiplier -= debuffValue / 100 * 1.2;
    } else {
      multiplier -= debuffValue / 100;
    }
  }

  // LIVELLO RIVEN
  const rivenLevel = parseInt(document.getElementById("rivenLevel").value) || 0;
  multiplier *= 1 + rivenLevel * 0.05;

  // META SCORE
  const baseMeta = parseFloat(document.getElementById("res-meta").textContent);
  const adjustedMeta = (baseMeta * multiplier * factionMultiplier).toFixed(2);
  document.getElementById("res-meta").textContent = adjustedMeta;

  // PREZZO dinamico
  const baseDisp = parseFloat(document.getElementById("res-disp").textContent);
  const priceMin = Math.round(100 + baseDisp * 200 * multiplier * factionMultiplier);
  const priceMax = Math.round(500 + baseDisp * 600 * multiplier * factionMultiplier);
  document.getElementById("res-price").innerText = priceMin + " - " + priceMax + " plat";
});
