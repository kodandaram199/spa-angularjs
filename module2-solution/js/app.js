(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    toBuy.buyItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
      { name: "cookies", quantity: 10 },
      { name: "butter", quantity: 1 },
      { name: "milk", quantity: 3},
      { name: "soft drinks", quantity: 10 },
      { name: "chips", quantity: 5 }
    ];
    var boughtItems = [];

    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.getBoughtItems = function(){
      return boughtItems;
    };

    service.buyItem = function(index){
      var itemBought = itemsToBuy[index];
      boughtItems.push(itemBought);
      itemsToBuy.splice(index, 1);
    };
  }

})();
