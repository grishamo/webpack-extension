"use strict";
import { BeforeRequest } from "./BeforeRequest";
import { EncryptedBeforeRequest as Encrypted } from "./BeforeRequestEncrypted";

export default class BackgroundFactory {

    constructor( product ){
        console.log('BackgroundFactory::constructor');

        this.productParams = product;
        this.beforeRequest = product.encrypted ?
            new Encrypted( product ):
            new BeforeRequest( product )
    }

    onBeforeRequest(){
        chrome.tabs.getSelected(null, (tab) => {
            // Before Request Listener - filter urls by requestFilters array
            chrome.webRequest.onBeforeRequest.addListener(
                details => this.beforeRequest.onBeforeRequest(details),
                { urls: this.beforeRequest.filters },
                ["blocking"]);

        });
    }

}

