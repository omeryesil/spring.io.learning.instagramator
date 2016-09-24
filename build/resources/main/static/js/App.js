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

            $http({
              method: 'GET',
              url: "/api/v1/userlist"
            }).then(function successCallback(response) {
                    var instagramUsers = response.data._embedded.instagram_user;
                    alert(instagramUsers.length);

                    //getObjProps(response.data._embedded.instagram_user);

                    ////We can use {'name': 'Omer Yesil'} as criteria too
                    //var filtered_json = find_in_object(JSON.parse(my_json), {instagramUsername: userId});

                    //alert(filtered_json);

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


function setobjToString(obj){
        var me =this;
        obj=obj[0];
        var tabjson=[];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                if (obj[p] instanceof Array){
                    tabjson.push('"'+p +'"'+ ':' + me.setobjToString(obj[p]));
                }else{
                    tabjson.push('"'+p +'"'+':"'+obj[p]+'"');
                }
            }
        }  tabjson.push()
        return '{'+tabjson.join(',')+'}';
    }


function getObjProps (obj) {
    for (var key in obj) {
      alert(key);
    }
    /*
    var shadowedKeys = [
      "isPrototypeOf",
      "hasOwnProperty",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
    for (var i=0, a=shadowedKeys, l=a.length; i<l; i++) {
      if map.hasOwnProperty(a[i])) {
        alert(a[i]);
      }
    }
    */
}