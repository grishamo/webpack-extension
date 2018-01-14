export default class BeforeRequest {

  constructor(details) {
    this.url = new URL(details.url);
    this.hostname = this.url.hostname;
    this.searchTerms = this.url.searchParams.get("q");
    this.isOmniSearch = this.url.pathname.includes("/srch");
    this.searchUrl = "http://srch_s.pdfbaron.com/query/to?query=" + this.searchTerms;
  }

  exec() {
    if (typeof this[this.hostname] === 'function') {
      this[this.hostname]();
    }
    else {
      this.redirectLink = this.url.href;
    }
  }

  set redirectLink(url) {
    this.redirectUrl = url
  }

  get redirectLink() {
    return this.redirectUrl;
  }

  ['www.pdfbaron.com']() {
    this.redirectLink = this.isOmniSearch ? this.searchUrl : this.url.href;
  }

  ['www.google.com']() {
    this.redirectLink = this.searchUrl;
  }

  ['www.google.co.il']() {
    this['www.google.com']()
  }

}
