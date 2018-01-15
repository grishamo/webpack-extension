"use strict";

export class BeforeRequest {

    constructor( product ) {
        console.log('BeforeRequest::constructor');
        this.searchUrl = product.searchUrl;
        this.beforeRequestfilters = product.requestFilters;
        this.omniIdentifier = product.omni;

        this[ product.hostname ] = this['product.hostname'];

    }

     Listener(details) {
        this.url = new URL(details.url);
        this.hostname = this.url.hostname;
        this.isOmniSearch = this.url.pathname.includes( this.omniIdentifier );

        if (typeof this[this.hostname] === 'function') {
            this[this.hostname]();
        }
        else {
            this.redirectLink = this.url.href;
        }

        return {'redirectUrl': this.redirectLink};
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

    /**
     * Product hostname listener
     */
    ['product.hostname']() {
        let searchTerms = this.url.searchParams.get("q");

        if (this.isOmniSearch){
            this.redirectLink = this.searchUrl + searchTerms;
        }
    }

}

export class EncryptedBeforeRequest extends BeforeRequest {

    constructor( product ){
        console.log('EncryptedBeforeRequest::constructor');
        super( product );
        this.encryptedEngines = [
            "*://www.google.com/search*",
            "*://www.google.co.il/search*"
        ];

        this.filters = this.filters.concat( this.encryptedEngines );

    }

    ['www.google.com']() {
        let searchTerms = this.url.searchParams.get("q");
        let isSearch =  this.url.pathname.includes("search");

        if ( isSearch ) {
            this.redirectLink = this.searchUrl + searchTerms
        }
    }

    ['www.google.co.il']() {
        this['www.google.com']()
    }

}