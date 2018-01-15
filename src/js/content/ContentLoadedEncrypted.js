"use strict";
import { ContentLoaded } from './ContentLoaded';
import encryptedMsg from './encryptedMsg.html';

export class EncryptedContentLoaded extends ContentLoaded {

  constructor(windowLocation){
    console.log("EncryptedContentLoaded::constructor");
    super(windowLocation);
    this.msgTemplates = new Map([
      ['google', encryptedMsg]
    ]);
  }

  drawEncryptMsg(templateName, id) {
    try {
      let templateHtml = this.msgTemplates.get(templateName);

      let s_input = document.querySelector(id);
      let elem = document.createElement('div');
      elem.setAttribute("id", "#encryptedMsg");
      elem.innerHTML = templateHtml;

      s_input.append(elem);
    } catch (err) {
      console.log(err);
    }
  }

  ['google']() {
    this.drawEncryptMsg('google' , '#sfdiv');
  };

  ['www.google.com']() {
    this['google']()
  }
  ['www.google.uk']() {
    this['google']()
  }
  ['www.google.co.il']() {
    this['google']()
  }

}