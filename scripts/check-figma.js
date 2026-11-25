const { execSync } = require('child_process');
const fs = require('fs');

try {
  const url = 'https://www.figma.com/design/WDor03zyFzMexRaswp0Op9/Starplify---Assignment?node-id=0-1';
  const html = execSync(`curl.exe -sL "${url}"`, { maxBuffer: 15 * 1024 * 1024, encoding: 'utf-8' });
  fs.writeFileSync('figma_page.html', html, 'utf-8');
  console.log('Saved figma_page.html, size:', html.length);
  
  const matches = html.match(/https:\/\/[^"'\s<>]*\.(?:png|jpg|jpeg|webp)[^"'\s<>]*/gi) || [];
  console.log('Total image urls found:', matches.length);
  console.log(matches.slice(0, 15));
} catch (e) {
  console.error('Error:', e.message);
}
