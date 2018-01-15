import '../img/icon128.png'
import '../img/icon48.png'
import '../img/icon16.png'

import BackgroundFactory from "./BackgroundFactory";

let product = {
    hostname: "www.pdfbaron.com",
    searchUrl: "http://srch_s.pdfbaron.com/query/to?query=",
    encrypted: true,
    omni: "srch",
    requestFilters: [
        "http://www.pdfbaron.com/srch/?q=*",
    ]
};

let BGFactory = new BackgroundFactory( product );

BGFactory.onBeforeRequest();



