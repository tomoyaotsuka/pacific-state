const util = require('util');



/**
 * Under directly
 *
 */

module.exports = {
  src:           './src/images/_sprites/**/*.{png,gif,jpg}',
  destImage:     './src/images/sprites.png',
  destCSS:       './src/styles/sprites.json',
  imgPath:       './images/sprites.png',
  algorithm:     'binary-tree',
  algorithmOpts: { sort: false },
  padding:       10,
  cssOpts: {
    cssClass: item => {
      return util.format('.ic-%s:before', item.name);
    }
  }
};



// /**
//  * Under subpath
//  *
//  */
//
// const fs   = require('fs');
// const path = require('path');
//
// const getFolders = dir_path => {
//   return fs.readdirSync(dir_path).filter( file => {
//     return fs.statSync(path.join(dir_path, file)).isDirectory();
//   });
// };
//
// module.exports = [];
//
// const folders = getFolders('./src/images/_sprites/');
// folders.forEach( folder => {
//   const option = {
//     src:       `./src/images/_sprites/${folder}/**/*.{png,gif,jpg}`,
//     destImage: `./src/images/sprites/${folder}.png`,
//     destCSS:   `./src/styles/sprites/${folder}.scss`,
//     imgPath:   `./images/sprites/${folder}.png`,
//     padding:   2,
//     algorithm: 'binary-tree',
//     algorithmOpts: { sort: false },
//     // engine: 'gmsmith',
//     cssOpts: {
//       cssClass: item => {
//         return util.format('.ic-%s:before', item.name);
//       }
//     }
//   };
//   module.exports.push( option );
// });



// /**
//  * Create JSON
//  *
//  */
//
// module.exports = {
//   src:           './src/images/_sprites/**/*.{png,gif,jpg}',
//   destImage:     './src/images/sprites.png',
//   destCSS:       './dist/sprites.json',
//   imgPath:       './images/sprites.png',
//   cssTemplate:    require('spritesmith-texturepacker'),
//   algorithm:     'binary-tree',
//   algorithmOpts: { sort: false },
//   padding:       10,
//   cssOpts: {
//     cssClass: item => {
//       return util.format('.ic-%s:before', item.name);
//     }
//   }
// };
