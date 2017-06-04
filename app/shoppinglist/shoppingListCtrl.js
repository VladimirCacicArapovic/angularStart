
angular.module('myApp').controller('shoppingList', ["$scope", "$routeParams","$location", "shoppingListService", function ($scope, $routeParams,$location, shoppingListService) {
    $scope.shopingItems = shoppingListService.shoppingList;
    if(!$routeParams.id){
        $scope.shopingItem =  { id:0, itemName: '', completed: true, date: new Date()};
    }else{
        $scope.shopingItem = _.clone(shoppingListService.findById(parseInt($routeParams.id)))
    }

    $scope.removeItem = function(item){
        shoppingListService.removeItem(item)
    };
    $scope.save = function(){
        shoppingListService.save($scope.shopingItem);
        console.log(shoppingListService);
        $location.path('/');
    };
    $scope.markItem = function(item){
        shoppingListService.markItem(item);
    }



    $scope.rp = 'Rout Params : ' + $routeParams.id;
}]);