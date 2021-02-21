const colorInput = document.getElementById('colorInput');
const originalColorCard = document.getElementById('originalColor');
const alteredColorCard = document.getElementById('alteredColor');

const sliderText = document.getElementById('colorAdjustmentText');
const slider = document.getElementById('colorAdjustment');

const originalColorLabel = document.getElementById('originalColorLabel');
const alteredColorLabel = document.getElementById('alteredColorLabel');

originalColorCard.style.backgroundColor = colorInput.value;
alteredColorCard.style.backgroundColor = colorInput.value;

colorInput.addEventListener('change', () => {
    originalColorCard.style.backgroundColor = colorInput.value;
    originalColorLabel.innerText = `Original Color ${colorInput.value}`;

    if (slider.value) {
      updateAlteredColorCard();
    }
});

slider.addEventListener('input', () => {
  sliderText.textContent = `${slider.value}%`;

  if (colorInput.value) {
    updateAlteredColorCard();
  }
})

function updateAlteredColorCard() {
  const alteredHexValue = alterColor(colorInput.value, slider.value);
  alteredColorCard.style.backgroundColor = alteredHexValue;
  alteredColorLabel.innerText = `Altered Color ${alteredHexValue}`;
}

function hexToRGB(hex) {
  let strippedHex = hex.replace('#', '');

  if(strippedHex.length === 3){
    strippedHex = strippedHex[0] + strippedHex[0] 
    + strippedHex[1] + strippedHex[1] 
    + strippedHex[2] + strippedHex[2];
  }
  
  const r  = parseInt(strippedHex.substring(0,2), 16);
  const g  = parseInt(strippedHex.substring(2,4), 16);
  const b  = parseInt(strippedHex.substring(4,6), 16);
  
  return {r,g,b};
}

  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return "#" + r + g + b;
  }

  function alterColor (hex, percentage) {
    const {r,g,b} = hexToRGB(hex);
    
    console.log(r);
    console.log(g);
    console.log(b);
    const amount = Math.floor((percentage/100) * 255);
    
    const newR = Math.max(Math.min(r + amount, 255), 0);
    const newG = Math.max(Math.min(g + amount, 255), 0);
    const newB = Math.max(Math.min(b + amount, 255), 0);
    return RGBToHex(newR, newG, newB);
  }
  
