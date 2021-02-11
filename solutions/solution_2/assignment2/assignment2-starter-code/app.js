(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService','$scope']
AlreadyBoughtController.$inject=['ShoppingListCheckOffService','$scope'];

var itemlist=[
    {
        name: "tomato",
        quantity: "2"
    },
    {
        name: "banana",
        quantity: "3"
    },
    {
        name: "apple",
        quantity: "1"
    },
    {
        name: "strawberry",
        quantity: "5"
    },
    {
        name: "pineapple",
        quantity: "1"
    }
]
var boughtlist=[];

console.log(itemlist.length);
console.log(boughtlist.length);

function ToBuyController(ShoppingListCheckOffService, $scope){

    

    $scope.test = "10";
    $scope.itemlist = itemlist;



   itemlist.remove = function(item){
        itemlist.splice(itemlist.indexOf(item),1);
        boughtlist.push(item);
    }

}

function AlreadyBoughtController (ShoppingListCheckOffService, $scope){
    
    $scope.boughtlist = boughtlist;
}


function ShoppingListCheckOffService(){

}

})();