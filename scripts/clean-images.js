const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const figmaDir = path.join(__dirname, '..', 'public', 'images', 'figma');
  console.log('Processing images in:', figmaDir);

  // 1. Process actor_clapper_actress.png
  // Size: 252 x 265 -> Crop out bottom text (y >= 195)
  try {
    const clapper = await Jimp.read(path.join(figmaDir, 'actor_clapper_actress.png'));
    clapper.crop({ x: 0, y: 0, w: 252, h: 195 });
    await clapper.write(path.join(figmaDir, 'actor_clapper_actress.png'));
    console.log('Cleaned actor_clapper_actress.png');
  } catch (e) {
    console.error('Error clapper:', e.message);
  }

  // 2. Process actor_leather_woman.png
  // Size: 211 x 448 -> Crop out purple block & lower head (y >= 235)
  try {
    const leather = await Jimp.read(path.join(figmaDir, 'actor_leather_woman.png'));
    leather.crop({ x: 0, y: 0, w: 211, h: 235 });
    await leather.write(path.join(figmaDir, 'actor_leather_woman.png'));
    console.log('Cleaned actor_leather_woman.png');
  } catch (e) {
    console.error('Error leather:', e.message);
  }

  // 3. Process actor_red_spotlight.png
  // Size: 188 x 326 -> Crop out purple block & lower head (y >= 120)
  try {
    const spotlight = await Jimp.read(path.join(figmaDir, 'actor_red_spotlight.png'));
    spotlight.crop({ x: 0, y: 0, w: 188, h: 120 });
    await spotlight.write(path.join(figmaDir, 'actor_red_spotlight.png'));
    console.log('Cleaned actor_red_spotlight.png');
  } catch (e) {
    console.error('Error spotlight:', e.message);
  }

  // 4. Process actor_beige_man.png
  // Size: 216 x 347 -> Crop out black lower area & cookie banner (y >= 155)
  try {
    const beige = await Jimp.read(path.join(figmaDir, 'actor_beige_man.png'));
    beige.crop({ x: 0, y: 0, w: 216, h: 155 });
    await beige.write(path.join(figmaDir, 'actor_beige_man.png'));
    console.log('Cleaned actor_beige_man.png');
  } catch (e) {
    console.error('Error beige:', e.message);
  }

  // 5. Process actor_black_suit.png
  // Size: 245 x 410 -> Crop out bottom ? circle (y >= 345)
  try {
    const suit = await Jimp.read(path.join(figmaDir, 'actor_black_suit.png'));
    suit.crop({ x: 0, y: 0, w: 245, h: 345 });
    await suit.write(path.join(figmaDir, 'actor_black_suit.png'));
    console.log('Cleaned actor_black_suit.png');
  } catch (e) {
    console.error('Error suit:', e.message);
  }

  // 6. Process music.png
  // Size: 190 x 145 -> Remove top-left toolbar (x: 0..120, y: 0..38)
  try {
    const music = await Jimp.read(path.join(figmaDir, 'music.png'));
    // Inpaint the top left toolbar area with the dark warm backdrop of the image
    const bgPixel = music.getPixelColor(150, 15);
    for (let x = 0; x < 125; x++) {
      for (let y = 0; y < 40; y++) {
        music.setPixelColor(bgPixel, x, y);
      }
    }
    await music.write(path.join(figmaDir, 'music.png'));
    console.log('Cleaned music.png toolbar');
  } catch (e) {
    console.error('Error music:', e.message);
  }

  // 7. Clean hero_audition_bg.png
  // Size: 1024 x 501
  // On left (x: 0..330), keep the clapper woman with slate
  // In center and bottom (x >= 320, or y >= 110 in center):
  // Darken/fade to smooth deep black vignette so HTML text and buttons render with 0 double-text!
  try {
    const hero = await Jimp.read(path.join(figmaDir, 'hero_audition_bg.png'));
    const black = 0x080808FF;
    
    // Mask center and bottom
    for (let y = 0; y < hero.bitmap.height; y++) {
      for (let x = 280; x < hero.bitmap.width; x++) {
        // Gradient fade from x=280 to x=380
        const factor = Math.min(1, Math.max(0, (x - 280) / 100));
        if (factor >= 1) {
          hero.setPixelColor(black, x, y);
        } else {
          const origColor = hero.getPixelColor(x, y);
          const r = Math.round(((origColor >> 24) & 255) * (1 - factor) + 8 * factor);
          const g = Math.round(((origColor >> 16) & 255) * (1 - factor) + 8 * factor);
          const b = Math.round(((origColor >> 8) & 255) * (1 - factor) + 8 * factor);
          const newColor = ((r << 24) | (g << 16) | (b << 8) | 255) >>> 0;
          hero.setPixelColor(newColor, x, y);
        }
      }
    }
    // Also mask bottom toolbar on the left (y >= 430)
    for (let y = 420; y < hero.bitmap.height; y++) {
      for (let x = 0; x < 320; x++) {
        hero.setPixelColor(black, x, y);
      }
    }

    await hero.write(path.join(figmaDir, 'hero_audition_bg.png'));
    console.log('Cleaned hero_audition_bg.png');
  } catch (e) {
    console.error('Error hero_bg:', e.message);
  }

  // 8. Clean cta_set_background.png
  // Size: 1024 x 589
  // Keep the cameraman / crew photo but fade the text and bottom/top Figma toolbars into cinematic black
  try {
    const cta = await Jimp.read(path.join(figmaDir, 'cta_set_background.png'));
    const black = 0x080808FF;
    
    // Mask top toolbar (y <= 55)
    for (let y = 0; y < 65; y++) {
      for (let x = 0; x < cta.bitmap.width; x++) {
        cta.setPixelColor(black, x, y);
      }
    }
    // Mask bottom toolbar (y >= 480)
    for (let y = 480; y < cta.bitmap.height; y++) {
      for (let x = 0; x < cta.bitmap.width; x++) {
        cta.setPixelColor(black, x, y);
      }
    }
    // Fade center text area (y between 60 and 300, x between 250 and 800)
    for (let y = 65; y < 320; y++) {
      for (let x = 200; x < 820; x++) {
        const origColor = cta.getPixelColor(x, y);
        // Dim by 85% to cinematic black shadow
        const r = Math.round(((origColor >> 24) & 255) * 0.12);
        const g = Math.round(((origColor >> 16) & 255) * 0.12);
        const b = Math.round(((origColor >> 8) & 255) * 0.12);
        const newColor = ((r << 24) | (g << 16) | (b << 8) | 255) >>> 0;
        cta.setPixelColor(newColor, x, y);
      }
    }

    await cta.write(path.join(figmaDir, 'cta_set_background.png'));
    console.log('Cleaned cta_set_background.png');
  } catch (e) {
    console.error('Error cta_bg:', e.message);
  }

  console.log('All images cleaned successfully!');
}

processImages();
