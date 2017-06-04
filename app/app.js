'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'shoppinglist/shoppingList.html',
        controller: 'shoppingList'
    }).when("/addItem", {
        templateUrl: 'shoppinglist/addNew.html',
        controller: 'shoppingList'
    }).when("/addItem/:id", {
        templateUrl: 'shoppinglist/addNew.html',
        controller: 'shoppingList'
    }).otherwise({
        redirectTo:'/'
    })
}]);
app.controller('mainView', ["$scope", function ($scope) {
    $scope.appTitle = "Test Data";
}]);

