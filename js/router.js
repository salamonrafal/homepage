/*
 * Controls the templates fetched, controllers to instantiate
 *
 */
function config($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('parent', {
      abstract: true,
      template: '<ui-view/>'
    })
    // setup a parent.inbox state
    .state('parent.home', {
      url: '/home',
      data: {
        title: 'Home',
        breadcrumb: 'Home'
      },
      views: {
        '@': {
          templateUrl: 'partials/index.html',
          controller: 'HomeCtrl as vm'
        }
      },
      resolve: HomeCtrl.resolve
    })
    .state('parent.articles', {
      url: '/:id',
      views: {
        'email@parent.inbox': {
          templateUrl: 'partials/articles.html',
          controller: 'ArticelsCtrl as vm'
        }
      },
      resolve: ArticelsCtrl.resolve
    });
  $urlRouterProvider.otherwise('/home');
  $httpProvider.useApplyAsync(true);
  $compileProvider.debugInfoEnabled(false);

}

// controls the dynamic page titles
function run($rootScope) {
  var page = {
    setBreadcrumb: function (name) {
      this.breadcrumb = name;
    },
    setTitle: function (title) {
      this.title = 'ngWorkshop: ' + title;
    }
  };

  function setTitle(event, state) {
    page.setBreadcrumb(state && state.data ? state.data.breadcrumb : '');
    page.setTitle(state && state.data ? state.data.title : '');
  }

  // exports
  $rootScope.page = page;
  $rootScope.$on('$stateChangeSuccess', setTitle);

}

angular
  .module('tm.homepage')
  .run(run)
  .config(config);
