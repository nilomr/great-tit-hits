const colormap = require('colormap');
const nshades = 256;
const alpha = Array.from({ length: nshades }, (_, i) =>
    Math.min(1, Math.max(0, i < nshades / 2.5 ? 0 : (i - nshades / 2.5) / (nshades / 2.5))));

const colors = colormap({
    alpha: alpha,
    colormap: 'magma',
    nshades: nshades,
    format: 'float',
});

// alpha doesnt work in colormap so change it manually
for (let i = 0; i < colors.length; i++) {
    colors[i][3] = alpha[i];
}


const fs = require('fs');
fs.writeFileSync('docs/bone-colormap.json', JSON.stringify(colors));