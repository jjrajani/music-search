import $ from 'jquery';

function ClickService (SearchService) {

  this.findYouTubes = findYouTubes;

  function findYouTubes() {
    $(".fa-youtube").on('click', function (event){
      let classes = event.target.classList
      let title = [];
      for (var i = 2; i < classes.length; i++) {
        title.push(classes[i]);
      }
      title = title.join(" ")
      console.log(title)
      SearchService.youTubeSearch(title)
    })
  }
}

ClickService.$inject = ['SearchService'];
export { ClickService };