/// <reference path="angular.min.js" />

// Creating Module
var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var employee = {
                        name : "Harshit Rathore",
                        age  : 19
                    };
                    $scope.employee = employee;
                    $scope.message = "Angular JS Tutorial Controller";
                    var country = {
                        name    : "India",
                        capital : "Delhi",
                        flag    : "images/pic.jpg"
                    };
                    $scope.country = country;
                    $scope.message1 = "Message 1";
                    var students = [
                        {name : "Damini", age : 19, gender : 'Female', salary : 2000000},
                        {name : "Harshit", age : 19, gender : 'Male', salary : 2100000},
                        {name : "Kalash", age : 19, gender : 'Male', salary : 5000000.50},
                        {name : "Krutika", age : 19, gender : 'Female', salary : 2500000},
                    ];
                    $scope.students = students;
                    var technologies= [
                        {name : "Java SE", likes : 0, dislikes : 0},
                        {name : "Java EE", likes : 0, dislikes : 0},
                        {name : "Angular JS", likes : 0, dislikes : 0}
                    ];
                    $scope.technologies = technologies;
                    // To increment likes
                    $scope.incrementLikes = function(technology){
                        technology.likes++;
                    }
                    // To increment dislikes
                    $scope.incrementDislikes = function(technology){
                        technology.dislikes++;
                    }
                    $scope.rowLimit = 4;
                    $scope.startIndex = 1;
                    $scope.sortCol = "name";
                    $scope.reverseSort = false;
                    $scope.sortData = function(column) {
                        $scope.reverseSort = ($scope.sortCol == column) ? !$scope.reverseSort :false;
                        $scope.sortCol = column;
                    }
                    $scope.getSortClass = function(column) {
                        if($scope.sortCol == column)
                            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                        return '';
                    }
                    $scope.search = function(item){
                        if($scope.searchText == undefined)
                            return true;
                        if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.salary.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
                            return true;
                        return false;
                    }
                    $scope.secondPage = "second.html";
                });