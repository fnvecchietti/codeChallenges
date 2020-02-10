(function() {

    /* the snippet below detects if url string matches with a specified Regexp for each variable
    if the regexp doesn't match return a value 'not found' */
  let url = window.location.href

  function urlParser() {
    version = url.match(/\/\d\//)? url.match(/\/\d\//)[0].replace(/\//g,'') : 'not found'
    collection = url.match(/api\/\w+\//) ? url.match(/api\/\w+\//)[0].replace(/api/,'').replace(/\//g, '') : 'not found'
    id = url.match(/\/\d\?/)? url.match(/\/\d\?/)[0].replace(/\?/, '').replace(/\//, '') : ' not found'
    sort = url.match(/sort=\w+/) ? url.match(/sort=\w+/)[0].replace(/sort=/, '') : 'not found'
    limit = url.match(/limit=\w+/) ? url.match(/limit=\w+/)[0].replace(/limit=/, '') : 'not found'
   
    return {
        version,
        collection,
        id,
        sort,
        limit
    }
  }
  this.parsedURL = urlParser();
  console.log(urlParser())
  //Parsed URL is accesible in the global object in this case the window if it's running in a browser
})();
