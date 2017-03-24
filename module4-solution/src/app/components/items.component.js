(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/app/partials/items.html',
    bindings: {
      items: '<'
    }
  });
})();
