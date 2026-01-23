const fs = require('fs');

async function removeBackground() {
  try {
    let Jimp = require('jimp');
    if (Jimp.default) Jimp = Jimp.default;
    if (Jimp.Jimp) Jimp = Jimp.Jimp;

    console.log('Reading image...');
    const image = await Jimp.read('public/logo.png');
    
    console.log('Processing image dimensions:', image.bitmap.width, 'x', image.bitmap.height);

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      if (red > 230 && green > 230 && blue > 230) {
        this.bitmap.data[idx + 3] = 0; 
      }
    });

    console.log('Writing image...');
    // Support both promise-based writeAsync (Jimp v0.x) and callback based write (Jimp ???)
    if (image.writeAsync) {
        await image.writeAsync('public/logo.png');
    } else {
        await new Promise((resolve, reject) => {
            image.write('public/logo.png', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
    console.log('Background removed successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeBackground();
