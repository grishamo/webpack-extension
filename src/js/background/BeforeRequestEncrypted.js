"use strict";
import { BeforeRequest } from "./BeforeRequest";

export class EncryptedBeforeRequest extends BeforeRequest {

  constructor( product ){
    super( product );
    console.log('EncryptedBeforeRequest::constructor');

    this.encryptedEngines = [
      "*://www.google.com/search*",
      "*://www.google.co.il/search*",
      "*://www.google.uk/search*"
    ];

    this.initSearchMethods(['google']);
    this.filters = this.filters.concat( this.encryptedEngines );

  }

  initSearchMethods(engines) {
    for(let key of engines) {
      this[`www.${key}.co.il`] = this[key];
      this[`www.${key}.com`] = this[key];
      this[`www.${key}.uk`] = this[key];
    }
  }


  ['google']() {
    let searchTerms = this.url.searchParams.get("q");
    let isSearch =  this.url.pathname.includes("search");

    let currentTab = this.getCurrentTab();

    console.log(window.location);

    if ( isSearch ) {
      this.redirectLink = this.searchUrl + searchTerms
    }
  }


}