export function beforeRequest(details) {
    let url = decodeURIComponent(details.url);
    let searchTerms = url.substring(url.indexOf('?q=') + '?q='.length);

    console.log('BeforeRequest: ${details}');
    return { 'redirectUrl': `http://srch_s.pdfbaron.com/query/to?query=${searchTerms}` };

}