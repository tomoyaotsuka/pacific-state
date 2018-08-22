const ua = window.navigator.userAgent.toLowerCase();
const ver = window.navigator.appVersion.toLowerCase();
const platform = window.navigator.platform.toLowerCase();

/**
 * Return true when smartphone
 * @return {boolean}
 */

export function isMobile() {
  return (
    /mobile/.test(ua) ||
    /iphone/.test(ua) ||
    /ipod/.test(ua) ||
    (/android/.test(ua) && /mobile/.test(ua))
  );
}

/**
 * Return true when tablet
 * @return {boolean}
 */

export function isTablet() {
  return /ipad/.test(ua) || (/android/.test(ua) && !/mobile/.test(ua));
}

/**
 * Return true when touch device
 * @return {boolean}
 */

export function isTouchDevice() {
  return 'ontouchstart' in window;
}

/**
 * Return true when modern IE
 * @return {boolean}
 */

export function isModern() {
  return (
    getBrowser() !== 'ie6' ||
    getBrowser() !== 'ie7' ||
    getBrowser() !== 'ie8' ||
    getBrowser() !== 'ie9' ||
    getBrowser() !== 'ie10'
  );
}

/**
 * Return iOS version
 * @return {number}
 */

export function iOSVersion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    const v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    const versions = [
      parseInt(v[1], 10),
      parseInt(v[2], 10),
      parseInt(v[3] || 0, 10)
    ];
    return versions[0];
  } else return 0;
}

/**
N * Return browser version
 * @return {string}
 */

export function getBrowser() {
  if (/edge/.test(ua)) return 'edge';
  // Edge
  else if (/iemobile/.test(ua)) return 'iemobile';
  // ieMobile
  else if (ua.indexOf('trident/7') !== -1) return 'ie11';
  // ie11
  else if (ua.indexOf('msie') !== -1 && ua.indexOf('opera') === -1) {
    if (ver.indexOf('msie 6.') !== -1) return 'ie6';
    // ie6
    else if (ver.indexOf('msie 7.') !== -1) return 'ie7';
    // ie7
    else if (ver.indexOf('msie 8.') !== -1) return 'ie8';
    // ie8
    else if (ver.indexOf('msie 9.') !== -1) return 'ie9';
    // ie9
    else if (ver.indexOf('msie 10.') !== -1) return 'ie10'; // ie10
  } else if (/chrome/.test(ua) && !/edge/.test(ua)) return 'chrome';
  // Chrome
  else if (/safari/.test(ua) && !/chrome/.test(ua)) return 'safari';
  // Safari
  else if (/opera/.test(ua)) return 'opera';
  // Opera
  else if (/firefox/.test(ua)) return 'firefox';
  // FIrefox
  else return 'unknown_browser';
}

/**
 * Return device name
 * @return {string}
 */

export function getDevice() {
  if (/iphone/.test(ua) || /ipod/.test(ua)) return 'iphone';
  else if (/ipad/.test(ua)) return 'ipad';
  else if (/android/.test(ua)) return 'android';
  else if (/mac/.test(ua) && /os/.test(ua)) return 'mac';
  else if (/win/.test(platform)) return 'windows';
  // else if (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1) return 'windows_phone';
  else return '';
}

/**
 * Add class to HTML
 *
 */

(() => {
  let documentClass = ' ';

  (documentClass +=
    getBrowser() !== '' ? `${getBrowser()} ` : 'browser-unknown '),
    (documentClass +=
      getDevice() !== '' ? `${getDevice()} ` : 'device-unknown '),
    (documentClass += isMobile() ? 'mobile ' : ''),
    (documentClass += isTablet() ? 'tablet ' : ''),
    (documentClass += !isMobile() && !isTablet() ? 'desktop ' : ''),
    (documentClass += isTouchDevice() ? 'touch ' : 'mouse '),
    (documentClass += isModern() ? 'modern ' : 'ancient ');

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.className += documentClass;
  });
})();
