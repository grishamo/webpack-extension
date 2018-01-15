'use strict';

const msgTemplates = {

    'google': {
      containerId: '#sfdiv',
      html:
        `<div>
            <p style="margin:0">Your Privacy will be protected by redirecting your search to Yahoo</p>
        </div>`,
      css: {
        position: 'absolute',
        zIndex: "5000000",
        background: '#ffffff',
        boxSizing: "content-box",
        padding: "10px 10px 10px 30px",
        right: "149px",
        top: "48px",
        left: "0",
        fontSize: "12px",
        whiteSpace: "normal",
        lineHeight: "7px",
        wordWrap: "break-word",
        cursor  : "pointer",
        boxShadow: "rgba(0, 0, 0, 0.31) 1px 1px 4px 1px",
        color: "rgb(142, 142, 142)",
        borderRadius: "0"
      }
    }

};

export default class ContentFactory {

  constructor(location) {
    this.location = location;
    this.host = location.host;
  }

  exec() {
    if (typeof this[this.host] === 'function') {
      this[this.host]();
    }
  }

  drawEncryptMsg(container) {
      try {
        let template = msgTemplates[container];

        let s_input = document.querySelector(template.containerId);
        let elem = document.createElement('div');
        elem.innerHTML = template.html;

        if( template.css ) {
          for (let key of Object.keys(template.css)) {
            elem.style[key] = template.css[key]
          }
        }

        s_input.append(elem);
      } catch (err) {
        console.log(err);
      }
  }


  ['www.google.com']() {
    return { draw: this.drawEncryptMsg('google') };
  };

  ['www.google.co.il']() {
    this['www.google.com']()
  }

}
