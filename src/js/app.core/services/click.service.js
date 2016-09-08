import $ from 'jquery';

function ClickService (SearchService) {

  this.findYouTubes = findYouTubes;
  this.findSpotifies = findSpotifies;

  function findYouTubes() {
    $(".fa-youtube").on('click', function (event){
      let classes = event.target.classList
      let search = [];
      for (var i = 2; i < classes.length; i++) {
        search.push(classes[i]);
      }
      search = search.join(" ")
      $('#player').removeClass('hidden')
      SearchService.youTubeSearch(search)
    })
  }

  function findSpotifies() {
    $(".fa-spotify").on('click', function (event){
      let classes = event.target.classList
      let search = [];
      console.log('here', classes)
      for (var i = 2; i < classes.length; i++) {
        search.push(classes[i]);
      }
      search = search.join(" ")
      console.log(search)
      SearchService.spotify(search)
    })
  }
}

ClickService.$inject = ['SearchService'];
export { ClickService };