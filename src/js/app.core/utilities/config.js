function config ($stateProvider, $urlRouterProvider) {


  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/core/layout.tpl.html',
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/core/home.tpl.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })


  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };