/**
 * Created by vcacicarapovic on 03/06/2017.
 */

angular.module('myApp').service('shoppingListService',function () {
    var shoppingListService = {};

    shoppingListService.shoppingList = [
        {id:1, itemName: 'Orange', completed: true, date: '2017-06-02'},
        {id:2,itemName: 'Banana', completed: true, date: '2017-06-03'},
        {id:3,itemName: 'Lime', completed: true, date: '2017-06-05'},
        {id:4,itemName: 'Orange', completed: true, date: '2017-06-06'},
        {id:5,itemName: 'Orange', completed: true, date: '2017-06-07'},
        {id:6,itemName: 'Orange', completed: true, date: '2017-06-08'},
        {id:7,itemName: 'Orange', completed: true, date: '2017-06-09'},
        {id:8,itemName: 'Orange', completed: true, date: '2017-06-10'}
    ];

    shoppingListService.findById = function (id) {
        for(var item in shoppingListService.shoppingList){
            if(shoppingListService.shoppingList[item].id === id){
                return shoppingListService.shoppingList[item];
            }
        }
    }
    shoppingListService.removeItem = function(item){
        var realItem = shoppingListService.shoppingList.indexOf(item);
        shoppingListService.shoppingList.splice(realItem,1)
    }
    shoppingListService.save = function (item) {

         var updateItem = shoppingListService.findById(item.id);

        debugger;
        if(updateItem){
            _.extend(updateItem,item);
        }else{
            item.id = shoppingListService.getNewId() ;
            debugger;
            shoppingListService.shoppingList.push(item)
        }

    };

    shoppingListService.getNewId = function () {
        if(shoppingListService.newId){
            shoppingListService.newId++;
            return shoppingListService.newId;
        }else{
            debugger;
            if(shoppingListService.shoppingList.length>0){
                var newMax = _.max(shoppingListService.shoppingList,function(item){
                    return item.id;
                });
                return shoppingListService.newId = newMax.id+1;
            }else{
                return shoppingListService.newId = 1;
            }

        }
    }
    shoppingListService.markItem = function (item) {
        debugger;
        item.completed = !item.completed;
    }
    
    return shoppingListService;

})
