const { Jimp } = require('jimp');

async function findBoundaries() {
  const images = [
    { name: 'actor_clapper_actress.png', checkX: 50 },
    { name: 'actor_leather_woman.png', checkX: 50 },
    { name: 'actor_red_spotlight.png', checkX: 50 },
    { name: 'actor_beige_man.png', checkX: 50 },
    { name: 'actor_center_man.png', checkX: 50 },
    { name: 'actor_black_suit.png', checkX: 50 },
  ];

  for (const item of images) {
    const img = await Jimp.read('public/images/figma/' + item.name);
    console.log(`\n=== ${item.name} (${img.bitmap.width}x${img.bitmap.height}) ===`);
    // Sample along Y
    for (let y = 0; y < img.bitmap.height; y += Math.floor(img.bitmap.height / 15)) {
      const color = img.getPixelColor(Math.floor(img.bitmap.width / 2), y);
      const r = (color >> 24) & 255;
      const g = (color >> 16) & 255;
      const b = (color >> 8) & 255;
      console.log(`y=${y}: rgb(${r}, ${g}, ${b})`);
    }
  }
}

findBoundaries();
