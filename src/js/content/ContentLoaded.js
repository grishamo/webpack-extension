"use strict";

export class ContentLoaded {

  constructor(windowLocation){
    console.log("ContentLoaded::constructor");
    this.windowLocation = windowLocation;
    this.host = windowLocation.host;
  }

  Listener(content) {
      this.content = content;

      if (typeof this[this.host] === 'function') {
        this[this.host]();
      }
    }

}
