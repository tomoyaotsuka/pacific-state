const util = require('util');



/**
 * When directly under
 *
 */

module.exports = {
  src:       './src/images/_sprite/**/*.{png,gif,jpg}',
  destImage: './src/images/sprite.png',
  destCSS:   './src/styles/common/sprite.scss',
  imgPath:   './images/sprite.png',
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
// module.exports = [];
//
// const folders = getFolders('./src/images/_sprite/');
// folders.forEach( folder => {
//   const option = {
//     src:       `./src/images/_sprite/${folder}/**/*.{png,gif,jpg}`,
//     destImage: `./src/images/sprite/${folder}.png`,
//     destCSS:   `./src/styles/common/sprite/${folder}.scss`,
//     imgPath:   `./images/sprite/${folder}.png`,
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
//
// const getFolders = dir_path => {
//   return fs.readdirSync(dir_path).filter( file => {
//     return fs.statSync(path.join(dir_path, file)).isDirectory();
//   });
// };
