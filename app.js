angular.module('movieSearchApp', [])
    .controller('MovieController', ['$scope', '$http', function($scope, $http) {
        $scope.handle = function(keyEvent) {
            if (keyEvent.which === 13) { // 13 is the key code for Enter
                $scope.searchMovies();
            }
        }
        $scope.searchMovies = function() {
            if ($scope.searchQuery) {
                var apiUrl = 'http://www.omdbapi.com/?s=' + $scope.searchQuery + '&apikey=b46a28f8';

                $http.get(apiUrl)
                    .then(function(response) {
                        $scope.movies = response.data.Search;
                    })
                    .catch(function(error) {
                        console.error("Error fetching movies:", error);
                    });
            }
        };

        $scope.showMovieDetails = function(imdbID) {
            var apiUrl = 'http://www.omdbapi.com/?i=' + imdbID + '&apikey=b46a28f8';
        
            $http.get(apiUrl)
                .then(function(response) {
                    $scope.selectedMovie = response.data;
                })
                .catch(function(error) {
                    console.error("Error fetching movie details:", error);
                });
        };
        
    }]);