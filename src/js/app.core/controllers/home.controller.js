import $ from 'jquery';
function HomeController ($scope, SearchService) {

  let vm = this;
  vm.search = search;

  function search(search) {
    $("#results").empty();
    SearchService.search(search).then( songs => {
      songs.data.forEach(song=> {
        var result = {
          title: song.title,
          lyrics: song.snippet
        }
        var resultHTML = `<li class="result">
                          <p>Title: ${result.title}</p>
                          <p>Lyrics: ${result.lyrics}</p>
                          </li>`
        $("#results").append(resultHTML);
      })
    })
  }


}

HomeController.inject = ['$scope', 'SearchService'];
export { HomeController };