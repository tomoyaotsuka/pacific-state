#!/usr/bin/env node
const path             = require('path');
const readline         = require('readline');
const Imagemin         = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo     = require('imagemin-svgo');

let outdir = process.env.PWD; // Default output folder.
let verbose = false; // Default no logging.

// The folder name specified MUST exist in the `glob` pattern of the npm-script.
const DEST_SUBROOT_FOLDER = 'images';

// Nice ticks for logging aren't supported via cmd.exe
const ticksymbol = process.env.npm_config_shell.indexOf('bash') !== -1 ? '✔' : '√';

const rl = readline.createInterface({
  input:    process.stdin,
  output:   null,
  terminal: false
});

// Handle the optional `-o` argument for the destination folder.
if ( process.argv.indexOf('-o') !== -1 ) {
  outdir = process.argv[process.argv.indexOf('-o') + 1];
}

// Handle the optional `-v` argument for verbose logging.
if ( process.argv.indexOf('-v') !== -1 ) {
  verbose = true;
}



/**
 * Utilizes the Imagemin API to create a new instance for optimizing each image.
 * @param {String} srcpath - The filepath of the source image to optimize.
 * @param {String} destpath - The destination path to save the resultant file.
 * @param {Function} - The relevent `use` plugin (jpegtran|optipng|gifsicle).
 */

function imagemin(srcpath, destpath, plugin) {
  const im = new Imagemin()
    .src(srcpath)
    .dest(destpath)
    .use(plugin);

  im.optimize((err, file) => {
    if (err) {
      console.error('Error: ' + err);
      process.exit(1);
    }
    if (file && verbose) {
      console.log('\x1b[32m%s\x1b[0m', ticksymbol, destpath);
    }
  });
}



/**
 * Obtains the destination path and file suffix from the original source path.
 * @param {String} srcpath - The filepath for the image to optimize.
 * @return {{dest: String, type: String}} dest path and ext (.jpg|.png|.gif).
 */

function getPathInfo(srcpath) {
  const ext     = path.extname(srcpath);
  const parts   = srcpath.split(path.sep);
  const subpath = parts.slice(parts.indexOf(DEST_SUBROOT_FOLDER), parts.length);

  subpath.unshift(outdir);

  let array = [];

  for (let i = 0; i < subpath.length - 1; i++) {
    array.push(subpath[i]);
  }

  const dest = path.normalize(array.join(path.sep));
  const pattern = new RegExp("/_");
  if ( !pattern.test( dest ) ) {
    return {
      dest: dest,
      ext:  ext
    };
  }
  else {
    return {
      dest: '',
      ext:  ''
    };
  }
}



/**
 * Triggers the relevent imagemin process according to file suffix (jpg|png|gif).
 * @param {String} srcpath - The filepath of the image to optimize.
 */

function optimizeImage(srcpath) {
  const p   = getPathInfo(srcpath);
  const ext = p.ext;

  switch(ext) {
    case '.jpg':
      Imagemin([srcpath], p.dest, {
        use: [
          imageminJpegtran({
            progressive: true
          })
        ]
      }).then(files => {
        console.log(files[0].path);
      });
      break;
    case '.png':
      Imagemin([srcpath], p.dest, {
        use: [
          imageminPngquant({
            quality: '80',
            speed: 1
          })
        ]
      }).then(files => {
        console.log(files[0].path);
      });
      break;
    case '.gif':
      Imagemin([srcpath], p.dest, {
        use: [
          imageminGifsicle({
            interlaced: true,
            optimizationLevel: 3
          })
        ]
      }).then(files => {
        console.log(files[0].path);
      });
      break;
    case '.svg':
      Imagemin([srcpath], p.dest, {
        plugins: [
          imageminSvgo({
            removeViewBox: false
          })
        ]
      }).then(files => {
        console.log(files[0].path);
      });
      break;
    default :
      break;
  }
}

// Read each line from process.stdin (i.e. the filepath)
rl.on('line', srcpath => {
  optimizeImage(srcpath);
});
