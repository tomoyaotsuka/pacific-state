const ENV = process.env.NODE_ENV;


document.addEventListener( 'DOMContentLoaded', () => {
  const app = new App();
  app.on( document.querySelector("[class^=page-]").getAttribute('id') );
}, false );


class App {

  constructor () {

  }

  on ( target ) {
    switch ( target ) {
      case 'index':
        break;
      default:
        break;
    }
  }
}
