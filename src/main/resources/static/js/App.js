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
            $http({ method: 'GET', url: "/api/v1/userlist"
            }).then(function successCallback(response) {
                    //find user
                    var user = null;
                    for (var i=0; i< response.data._embedded.instagram_user.length; i++)
                    {
                        var u = response.data._embedded.instagram_user[i];
                        if (u.instagramUsername == userId)
                        {
                            user = u;
                            break;
                        }
                    }
                    if (user == null)
                    {
                        alert("User not found");
                        return;
                    }
                    var mediaUrl = user._links.instagramMedia.href;
                    alert(mediaUrl);

              }, function errorCallback(response) {
                    var error = setobjToString (response);

                    alert("ERROR: " + error);
            });
		}

		function getUser (userId, instagramUsers) {
		    $.grep(instagramUsers, function (n, i) {
		        return instagramUsers.instagramUsername == userId;
		    });
		}


	});

	mainApp.controller('aboutController', function($scope) {
		$scope.subTitle = 'About';
	});

