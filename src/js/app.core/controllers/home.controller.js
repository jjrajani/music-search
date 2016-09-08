import $ from 'jquery';
function HomeController ($scope, SearchService, TemplateService, ClickService) {

  let vm = this;
  vm.search = search;

  function search(search) {
    $("#results").empty();
    let a = 0,
        songSnips = {},
        artists = {};
    while (a < 8 || songSnips === undefined || songSnips.length < 10) {
      SearchService.lyricSearch(search, a).then( songs => {
        let i = 0;
        songs.data.forEach(song=> {
          while (i < songs.data.length) {
            if (!songSnips[song.snippet] || !artists[song.artist.name]) {
              songSnips[song.snippet] = true;
              artists[song.artist.name] = true;
              TemplateService.searchResultTpl(song);
            }
            i++;
          }
        })
        ClickService.findYouTubes()
      })
      a++;
    }
  }


}

HomeController.inject = ['$scope', 'SearchService', 'TemplateService', 'ClickService'];
export { HomeController };