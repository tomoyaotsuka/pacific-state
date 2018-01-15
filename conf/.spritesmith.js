const util = require('util');



/**
 * When directly under
 *
 */

module.exports = {
  src:       './src/images/_sprites/**/*.{png,gif,jpg}',
  destImage: './src/images/sprites.png',
  destCSS:   './src/styles/sprites.scss',
  imgPath:   './images/sprites.png',
  padding: 2,
  algorithm: 'binary-tree',
  algorithmOpts: { sort: false },
  // engine: 'gmsmith',
  cssOpts: {
    cssClass: item => {
      return util.format('.ic-%s:before', item.name);
    }
  }
};



/**
 * When under subpath
 *
 */

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
