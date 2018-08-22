/**
 * util.js
 *
 * ndex
 * 1. onWindowResize
 * 2. getQueryParameters
 *
 */

/**
 * [windowResize description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */

export function onWindowResize(callback) {
  const interval = Math.floor((1000 / 60) * 10);
  let resizeTimer;
  window.addEventListener('resize', () => {
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(() => {
      callback();
    }, interval);
  });
}

/**
 * Get Query Parameters
 *
 * @example
 * getQueryParameters(location.search.substr(1));
 * getQueryParameters(target.getAttribute('href').replace(/(.*?)\?/, ''));
 */

export function getQueryParameters(target) {
  const text = target;
  return text.split('&').reduce(function(obj, v) {
    const pair = v.split('=');
    obj[pair[0]] = pair[1];
    if (obj[pair[0]]) return obj;
  }, {});
}

/**
 *
 */

export function shuffleArray(array) {
  let n = array.length,
    t,
    i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}

/**
 *
 */

export function isMobileView() {
  return matchMedia('(max-width: 768px)').matches;
}
