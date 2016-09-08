import $ from 'jquery';
import { secrets, apis } from '../../secrets/secrets'

function SearchService () {

  this.lyricSearch = lyricSearch;
  this.youTubeSearch = youTubeSearch;
  this.spotify = spotify;

  //LyricsNMusic
  function lyricSearch(search, page) {
    search = '&q=' + search
    page = '&page=' + page
    let songs = $.ajax({
      url: `${apis.lyrics.baseURL}${apis.lyrics.APIKey}` + search + page,
      dataType: 'jsonp'
    })
    return songs
  }

  // YouTube
  function youTubeSearch(search) {
    let videos = $.ajax({
      url: `${apis.youTube.baseURL}&q=${search}&key=${apis.youTube.APIKey}`
    }).then( res => {
      let video = res.items[0].id.videoId
      window.open(`https://www.youtube.com/watch?v=${video}`, '_blank');
    })
  }

  //Spotify
  function spotify(search) {
    search = "&q=" + search;
    let songs = $.ajax({
      url: `${apis.spotify.baseURL}${apis.spotify.type}${search}`
    }).then( res => {
      window.open(res.tracks.items[0].external_urls.spotify)
    })
  }
}

SearchService.$inject = [];
export { SearchService };