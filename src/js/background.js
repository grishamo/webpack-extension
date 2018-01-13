import '../img/icon128.png'
import '../img/icon48.png'
import '../img/icon16.png'

import { beforeRequest } from "./beforerequest";

chrome.webRequest.onBeforeRequest.addListener( beforeRequest,
    { urls: ["http://www.pdfbaron.com/?q=*"] },
    ["blocking"]);
