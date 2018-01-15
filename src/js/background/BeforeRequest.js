"use strict";

export class BeforeRequest {

    constructor( product ) {
        console.log('BeforeRequest::constructor');
        this.searchUrl = product.searchUrl;
        this.beforeRequestfilters = product.requestFilters;
        this.omniIdentifier = product.omni;

        this[ product.hostname ] = this['product.hostname'];

    }

    onBeforeRequest(details) {
      this.initBeforeRequestParams(details);

      if (typeof this[this.hostname] === 'function') {
        this[this.hostname]();
      }

      return { 'redirectUrl': this.redirectLink };
    }

    initBeforeRequestParams(details){
      this.requestDetails = details;
      this.url = new URL(details.url);
      this.hostname = this.url.hostname;
      this.isOmniSearch = this.url.pathname.includes(this.omniIdentifier);
      this.redirectLink = this.url.href;
    }

    /**
     * Get Before Request Filters
     * @returns {Array}
     */
    get filters() {
        return this.beforeRequestfilters;
    }

    /**
     * Set Before Request Filters
     * @param filters { Array }
     */
    set filters(filters) {
        this.beforeRequestfilters = filters
    }

    getCurrentTab() {
      chrome.tabs.getCurrent( (tab) => {
        return tab;
      });
    }

    /**
     * Product hostname listener
     */
    ['product.hostname']() {
        let searchTerms = this.url.searchParams.get("q");

        if (this.isOmniSearch ){
            this.redirectLink = this.searchUrl + searchTerms;
        }
    }

}