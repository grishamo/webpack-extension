import '../img/icon128.png'
import '../img/icon48.png'
import '../img/icon16.png'

import BeforeRequest from "./beforerequest";



const requestFilters = [
  "http://www.pdfbaron.com/srch/?q=*",
  "*://www.google.com/search*",
  "*://www.google.co.il/search*"
];


chrome.tabs.getSelected(null, function(tab){

  chrome.webRequest.onBeforeRequest.addListener( (details) => {

      let beforeRequestFactory = new BeforeRequest(details);
      beforeRequestFactory.exec();

      let redirectUrl = beforeRequestFactory.redirectLink;

      return { 'redirectUrl': redirectUrl };

    },
    { urls: requestFilters},
    ["blocking"]);

});

