const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Ensure icon.svg exists
const svgPath = path.join(publicDir, 'icon.svg');
if (!fs.existsSync(svgPath)) {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#000000"/>
  <path d="M24 2C24.4 4.5 26.5 6.6 29 7C26.5 7.4 24.4 9.5 24 12C23.6 9.5 21.5 7.4 19 7C21.5 6.6 23.6 4.5 24 2Z" fill="#9353FF"/>
  <circle cx="12" cy="7" r="3.2" fill="#FFFFFF"/>
  <path d="M6 15.5C8.5 13 14 12 17 14.5C18.5 15.8 19.5 18 20 21C20.4 23 18.5 24.5 16.5 24C14.5 23.5 14 20.5 12 19C10.5 18 8 19 7 21C6 23 4 22 4 20C4 18 5 16.5 6 15.5Z" fill="#FFFFFF"/>
  <path d="M13 22C14.5 25 16 28 17.5 31C16 31 14 30 12.5 28C11 26 10 24 10 23L13 22Z" fill="#FFFFFF"/>
</svg>`;
  fs.writeFileSync(svgPath, svgContent, 'utf-8');
}

// Copy icon assets if available
const figmaLogo = path.join(publicDir, 'images', 'figma', 'figma_logo.png');
const appleIcon = path.join(publicDir, 'apple-icon.png');
const iconPng = path.join(publicDir, 'icon.png');
const faviconIco = path.join(publicDir, 'favicon.ico');

if (fs.existsSync(figmaLogo)) {
  if (!fs.existsSync(appleIcon)) fs.copyFileSync(figmaLogo, appleIcon);
  if (!fs.existsSync(iconPng)) fs.copyFileSync(figmaLogo, iconPng);
  if (!fs.existsSync(faviconIco)) fs.copyFileSync(figmaLogo, faviconIco);
}

console.log('Icons prepared successfully.');
