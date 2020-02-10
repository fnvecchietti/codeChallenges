(function(){
    root = document.getElementById('urlparsed')

    root.innerHTML = `{<br>
    version : ${this.parsedURL['version']} <br>
    collection: ${this.parsedURL['collection']} <br> 
    id: ${this.parsedURL['id']} <br>
    sort: ${this.parsedURL['sort']} <br>
    limit:  ${this.parsedURL['limit']} <br>
    }`
})()