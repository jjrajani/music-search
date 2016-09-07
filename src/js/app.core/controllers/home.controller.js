import $ from 'jquery';
function HomeController ($scope, SearchService, TemplateService) {

  let vm = this;
  vm.search = search;

  function search(search) {
    $("#results").empty();
    SearchService.search(search).then( songs => {
      let i = 0;
      songs.data.forEach(song=> {
        while (i < 8) {
          console.log(song)
          TemplateService.searchResultTpl(song)
          i++;
        }
      })
    })
  }


}

HomeController.inject = ['$scope', 'SearchService', 'TemplateService'];
export { HomeController };