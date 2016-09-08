import $ from 'jquery';
function SearchService () {

  this.lyricSearch = lyricSearch;
  this.youTubeSearch = youTubeSearch;

  //LyricsNMusic

  let baseURL = `http://api.lyricsnmusic.com/songs?`;
  let apiKey = `api_key=78828045566c3e4dc0c824112ef083`;

  function lyricSearch(search) {
    search = '&q=' + search
    let songs = $.ajax({
      url: `${baseURL}${apiKey}` + search,
      dataType: 'jsonp'
    })
    return songs
  }

  // YouTube

  let youTubeAPIKey = `AIzaSyC65e0itDIWnvwFnuCRaB70KEEFSAuxjX0`;
  let youTubeBaseURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDefinition=high&relevanceLanguage=en`

  function youTubeSearch(title) {
    let videos = $.ajax({
      url: `${youTubeBaseURL}&q=${title}&key=${youTubeAPIKey}`
    }).then( res => {
      let video = res.items[0].id.videoId
      window.open(`https://www.youtube.com/watch?v=${video}`, '_blank');
    })
    
  }
}

SearchService.$inject = [];
export { SearchService };