import $ from 'jquery';
function HomeController ($scope, SearchService, TemplateService, ClickService) {

  let vm = this;
  vm.search = search;

  function search(search) {
    $("#results").empty();
    SearchService.lyricSearch(search).then( songs => {
      let i = 0;
      let songSnips = {};
      songs.data.forEach(song=> {
        while (i < songs.data.length) {
          if (!songSnips[song.snippet]) {
            console.log(song.snippet)
            songSnips[song.snippet] = true
            // TemplateService.searchResultTpl(song)
          }
          i++;
        }
      })
      ClickService.findYouTubes()
    })
  }


}

HomeController.inject = ['$scope', 'SearchService', 'TemplateService', 'ClickService'];
export { HomeController };