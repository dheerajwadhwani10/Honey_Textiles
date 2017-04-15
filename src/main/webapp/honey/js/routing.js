var app = angular.module('honeyApp', ["ui.router",'ui.bootstrap']);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider) {
    
// $urlRouterProvider.otherwise('home/projectList');
	
	// $urlRouterProvider.otherwise('index');
    
    $stateProvider
    
    .state('index', {
        url: '/index',
        templateUrl: 'index.html',
        // controller: 'indexCtrl'
     })
     
     .state('login', {
        url: '/login',
        templateUrl : 'views/login.html'
     })
     .state('register', {
         url: '/register',
         templateUrl : 'views/register.html'
      })
    
    .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'views/aboutUs.html',
        controller: 'aboutUsCtrl'
     })
     
     .state('product', {
        url: '/product',
        templateUrl : 'views/products.html',
        controller: 'productCtrl'
     })
     
     .state('contact', {
        url: '/contact',
        templateUrl : 'views/contact.html'
     })
     
     .state('pagination', {
        url: '/pagination',
        templateUrl : 'views/pagination.html',
        controller:'pagination'
     })
}]);

app.run(['$rootScope', '$state', function($rootScope, $state) {
	$rootScope.$on('$stateChangeStart', function(evt, to, params) {
		if (to.redirectTo) {
			evt.preventDefault();
			$state.go(to.redirectTo, params, {
				location : 'replace'
			});
		}
	});
}]);