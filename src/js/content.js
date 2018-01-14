
import ContentFactory from './contentFactory';


let factory = new ContentFactory( window.location );

if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {

    factory.exec();

  }, false);
}

