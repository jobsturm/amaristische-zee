// generate-icons.js
const fs = require('fs');
const path = require('path');

// 1) Where are your SVGs?
//    This looks in: <project root>/src/assets/icons
const iconsDir = path.join(__dirname, 'src/assets/icons');

// 2) Where should we write the generated file?
//    This writes to: <project root>/src/utils/svg-loader/icons-generated.ts
const outFile = path.join(__dirname, 'src/utils/svg-loader/icons-generated.ts');

// 3) Read all .svg files in that folder
const svgFiles = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

// 4) Prepare lines for the TypeScript output
const lines = [
  `export const icons = {`
];

svgFiles.forEach(file => {
  const name = file.replace('.svg', '');
  // Vite's ?raw suffix will import the raw SVG string
  // The relative path below is from icons-generated.ts → src/assets/icons
  lines.push(`  "${name}": () => import('../../assets/icons/${file}?raw'),`);
});

lines.push(`} as const;`);
lines.push(`\nexport type IconKeys = keyof typeof icons;`);

// 5) Write out the generated TypeScript
fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log(`Generated ${outFile} with ${svgFiles.length} icons.`);
