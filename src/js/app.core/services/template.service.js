import $ from 'jquery';
function TemplateService () {

  this.searchResultTpl = searchResultTpl;

  function searchResultTpl(song) {
    var result = {
      title: song.title,
      lyrics: song.snippet,
      artist: song.artist.name
    }
    var resultHTML = `<li class="result">
                      <p>Title: ${result.title}</p>
                      <p>Lyrics: ${result.lyrics}</p>
                      <p>Artist: ${result.artist}</p>
                      </li>`
    $("#results").append(resultHTML);
  }

}

TemplateService.$inject = [];
export { TemplateService };