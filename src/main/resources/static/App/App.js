
	// create the module and name it scotchApp
	var mainApp = angular.module('mainApp', ['ngRoute']);

	// configure our routes
	mainApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/pages/login.html',
				controller  : 'loginController'
			})

			// route for the about page
			.when('/home', {
				templateUrl : 'app/pages/home.html',
				controller  : 'homeController'
			})

			// route for the contact page
			.when('/about', {
				templateUrl : 'app/pages/about.html',
				controller  : 'aboutController'
			});
	});

	// create the controller and inject Angular's $scope
	mainApp.controller('loginController', function($scope, $location) {

        $scope.login = function() {
            if ($scope.email =="test" && $scope.password=="test") {
                $location.path( "/home" );
            } else {
                $scope.message="Email and password do not match!";
            }
        }
	});

	mainApp.controller('homeController', function($scope) {
		$scope.message = 'Home page';
	});

	mainApp.controller('aboutController', function($scope) {
		$scope.message = 'About page.';
	});

