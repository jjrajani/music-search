import $ from 'jquery';
function SearchService () {
  this.search = search;


  let baseURL = `http://api.lyricsnmusic.com/songs?`;
  let apiKey = `api_key=78828045566c3e4dc0c824112ef083`;

  function search(search) {
    search = '&q=' + search
    let songs = $.ajax({
      url: `${baseURL}${apiKey}` + search,
      dataType: 'jsonp'
    })
    return songs
  }
}

SearchService.$inject = [];
export { SearchService };