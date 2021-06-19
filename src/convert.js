const { BitmapImage, GifFrame, GifUtil } = require('gifwrap');
const Jimp = require('jimp');

Jimp.read("src/logo.png", (err, logo) => {
    const fCopied = [new GifFrame(new BitmapImage(logo.bitmap))];

    GifUtil.write("src/logo.gif", fCopied, {}).then(outputGif => {
        console.log("modified");
    });
});