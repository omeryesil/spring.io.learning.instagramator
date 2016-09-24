    var configProvider = new Object();
    configProvider.instagramUserListServiceUrl = "https://instagram-microservice-production.apps.dev.gsdcf.manulife.com/instagram_user";

    // -----------------------------------------------------------------------------
	// create the module and name it scotchApp
	var mainApp = angular.module('mainApp', ['ngRoute']);

	// configure our routes
	mainApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/login.html',
				controller  : 'loginController'
			})

			// route for the about page
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'homeController'
			})

			// route for the contact page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			});
	});

	// create the controller and inject Angular's $scope
	mainApp.controller('loginController', function($scope, $location) {
        $scope.subTitle = "Login";

        $scope.login = function() {
            if ($scope.email =="test" && $scope.password=="test") {
                $location.path( "/home" );
            } else {
                $scope.message="Email and password do not match!";
            }
        }

	});

	mainApp.controller('homeController', function($scope, $http) {
		$scope.subTitle = "Home";

		$scope.receiveInstagramMedia = function ( ) {
		    var userId = $scope.userId;

            // Get all users -------------- / Pagination not added ---
            $http({
              method: 'GET',
              url: "/api/v1/userlist"
            }).then(function successCallback(response) {
                    var instagramUsers = response.data._embedded.instagram_user;
                    alert(instagramUsers.length);


              }, function errorCallback(response) {
                    var error = setobjToString (response);

                    alert("ERROR: " + error);
            });
		}

		function getUserMedia (userId, userList) {
		    $.grep(userList, function (n, i) {
		        return n.instagram_user.instagramUsername == "userId";
		    });

		}


	});

	mainApp.controller('aboutController', function($scope) {
		$scope.subTitle = 'About';
	});


function find_in_object(my_object, my_criteria){

  return my_object.filter(function(obj) {
    return Object.keys(my_criteria).every(function(c) {
      return obj[c] == my_criteria[c];
    });
  });

}