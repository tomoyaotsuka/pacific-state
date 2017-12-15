const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

// imagemin(['dist/images/**/*.jpg'], 'dist/images', {
//     plugins: [
//         imageminJpegtran()
//     ]
// }).then(() => {
//     console.log('JPEG optimized.');
// });
//
//
// imagemin(['dist/images/*.png'], 'dist/images', {use: [imageminPngquant()]}).then(() => {
//     console.log('PNG optimized.');
// });

imagemin( ['dist/images/**/*.{jpg,png}'], 'dist/images', {
  plugins: [
    imageminJpegtran(),
    imageminPngquant({ quality: '65-80' })
  ]
}).then( () => {
  console.log('Images optimized.');
});
