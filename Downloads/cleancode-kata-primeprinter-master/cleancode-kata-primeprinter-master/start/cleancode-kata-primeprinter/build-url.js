function buildUrl(url, options) {
    var builtUrl;

    if (url === null) {
      builtUrl = '';
    } else if (typeof(url) === 'object') {
      builtUrl = '';
      options = url;
    }

    //url avec query string
    function appendPath(url, options) {
    if (options && options.path) {
        return url + '/' + options.path;
    }
    return url;
    }

    //url avec queryParams
    function appendQueryParams(url, options) {
    if (options && options.queryParams) {
        const queryString = Object.keys(options.queryParams)
        .map(key => `${key}=${options.queryParams[key]}`)
        .join('&');
        return url + '?' + queryString;
    }
    return url;
    }

    //url avec query et path
    function appendHash(url, options) {
    if (options && options.hash) {
        return url + '#' + options.hash;
    }
    return url;
    }

    //construction de l'url
    function buildUrl(url, options) {
    if (url === null) {
        return '';
    } else if (typeof(url) === 'object') {
        options = url;
        url = '';
    }

    let builtUrl = url || '';
    builtUrl = appendPath(builtUrl, options);
    builtUrl = appendQueryParams(builtUrl, options);
    builtUrl = appendHash(builtUrl, options);

    return builtUrl;
    }

    // Usage

    console.log(buildUrl('http://example.com', { path: 'users', queryParams: { name: 'John' }, hash: 'profile' }));
    console.log(buildUrl({ path: 'users', queryParams: { name: 'John' }, hash: 'profile' }));
    console.log(buildUrl('http://example.com'));
    console.log(buildUrl(null));


};
