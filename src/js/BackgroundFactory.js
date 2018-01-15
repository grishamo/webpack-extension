"use strict";
import {BeforeRequest, EncryptedBeforeRequest} from "./BeforeRequest";

export default class BackgroundFactory {

    constructor( product ){
        console.log('BackgroundFactory::constructor');

        this.productParams = product;
        this.beforeRequest = product.encrypted ?
            new EncryptedBeforeRequest( product ):
            new BeforeRequest( product )
    }

    onBeforeRequest(){
        chrome.tabs.getSelected(null, (tab) => {

            // Before Request Listener - filter urls by requestFilters array
            chrome.webRequest.onBeforeRequest.addListener(
                details => this.beforeRequest.Listener(details),
                { urls: this.beforeRequest.filters },
                ["blocking"]);

        });
    }
}

