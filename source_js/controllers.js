/* Sample Controller */
/*
app.controller('mp3Controllers', ['$scope',  function($scope) {
    $scope.myFirstVariable = "ben"
}]);  */

var mp3Controllers = angular.module('mp3Controllers', []);

mp3Controllers.controller('detailsController', ['$scope', '$http', '$routeParams', '$location',
  function ($scope, $http, $routeParams, $location) {

	$scope.params = $routeParams;
	var myID = $scope.params.id;
	$scope.movies = [];
	$scope.myMovie; 


  		
		    $http.get('./data/imdb250.json').
			  success(function(data, status, headers, config) {
			    $scope.movies=data;
					for (var i in $scope.movies){
						if ($scope.movies[i].imdbID==myID) {
							$scope.myMovie=$scope.movies[i];
							break;
						}
					}
					//console.log($scope.myMovie);
			  }).
			  error(function(data, status, headers, config) {
			    console.log("shucks");
			  });

			  $scope.next = function(curr_rank) {
			    var next_rank=curr_rank+1;
			    var next_id;
			    var first_id;
			    for (var i in $scope.movies){
			    	if (i==0){
						first_id=$scope.movies[i].imdbID;;
					}
						if ($scope.movies[i].rank==next_rank) {
							next_id=$scope.movies[i].imdbID;
							break;
						}
					}
				if (next_id){
					var new_loc="/details/"+next_id;
					$location.path(new_loc);
				} else{
					var new_loc="/details/"+first_id;
					$location.path(new_loc);
				}

			  }

			   $scope.previous = function(curr_rank) {
			    var next_rank=curr_rank-1;
			   
				    var next_id;
				    var last_id;
				    for (var i in $scope.movies){
							if ($scope.movies[i].rank==next_rank) {
								next_id=$scope.movies[i].imdbID;
								break;
							}
							last_id=$scope.movies[i].imdbID;
						}
				 if(next_rank>=1){		
					var new_loc="/details/"+next_id;
					$location.path(new_loc);
				  }
				  else{
				  	var new_loc="/details/"+last_id;
					$location.path(new_loc);
				  }
				}


  }]);

mp3Controllers.controller('galleryController', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {
  	$scope.movies = [];

  	$scope.genres = [];
  	$scope.genres.push("All");
  	$scope.currMovies = [];
  		
		    $http.get('./data/imdb250.json').
			  success(function(data, status, headers, config) {
			    //console.log(data);
			    $scope.movies=data;
			    $scope.currMovies=data;
				for (var i in $scope.movies){
					for( var z in $scope.movies[i].genre){
						if ($.inArray($scope.movies[i].genre[z], $scope.genres)==-1) {
						$scope.genres.push($scope.movies[i].genre[z]);
					}
				}
				//
					
				}

			  }).
			  error(function(data, status, headers, config) {
			    console.log("shucks");
			  });

		 $scope.filterMovies = function (g) {
		 		var genre=g;
		 		$scope.currMovies = [];
		 		if(genre=="All"){
		 			$scope.currMovies=$scope.movies;
		 		} else {
			        for (var i in $scope.movies){
							if ($.inArray(genre, $scope.movies[i].genre)!=-1) {
								$scope.currMovies.push($scope.movies[i]);
						}

					}
				}
			
		    };


  }]);

mp3Controllers.controller('listController', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
  	$scope.movies = [];

  		
		    $http.get('./data/imdb250.json').
			  success(function(data, status, headers, config) {
			    //console.log(data);
			    $scope.movies=data;
			  }).
			  error(function(data, status, headers, config) {
			    console.log("shucks");
			  });

  }]);




