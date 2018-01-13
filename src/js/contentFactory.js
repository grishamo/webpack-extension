'use strict';

export default class ContentFactory {

    constructor( host ){
        this.host = host;
    }

    exec(){
        if ( typeof [this.host] === 'function') {
            [this.host]();
        }
    }

    ['www.google.co.il'](){
        console.log('google');
    }

}