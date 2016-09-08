import $ from 'jquery';
function TemplateService () {

  this.searchResultTpl = searchResultTpl;
  this.searchYouTube = searchYouTube;

  function searchResultTpl(song) {
    var result = {
      title: song.title,
      lyrics: song.snippet,
      artist: song.artist.name
    }
    var resultHTML = `<li class="result">
                        <p>Artist: ${result.artist}</p>
                        <p>Title: ${result.title}</p>
                        <i class="fa fa-youtube ${result.title} ${result.artist}" aria-hidden="true"></i>
                        <i class="fa fa-spotify ${result.title} ${result.artist}" aria-hidden="true"></i>
                        <p>Lyrics: ${result.lyrics}</p>
                      </li>`
    $("#results").append(resultHTML);
  }

  function searchYouTube () {
    console.log('here');
  }

}

TemplateService.$inject = [];
export { TemplateService };