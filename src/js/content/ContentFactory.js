'use strict';
import { ContentLoaded } from './ContentLoaded';
import { EncryptedContentLoaded } from './ContentLoadedEncrypted';

export default class ContentFactory {

  constructor( product ) {
    console.log("ContentFactory::constructor");
    this.product = product;
    this.windowLocation = window.location;
    this.contentLoaded = product.encrypted ?
      new EncryptedContentLoaded( this.windowLocation ) :
      new ContentLoaded( this.windowLocation )

  }

  onDOMContentLoaded() {

    if(document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded',
        content => this.contentLoaded.Listener(content),
        false);
    }

  }


}
