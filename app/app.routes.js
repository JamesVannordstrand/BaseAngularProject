app.config(['$routeProvider', function($routeProvider){
  
  $routeProvider
    .when('/home', {
      templateUrl: '/components/home/homeView.html',
      controller: 'homeCtrl'
    })
    .when('/blog', {
      templateUrl: '/components/blog/blogView.html',
      controller: 'blogCtrl'
    })
    .otherwise({redirectTo:'/'})

}]);
