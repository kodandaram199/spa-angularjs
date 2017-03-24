(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/app/partials/categories.html',
    bindings: {
      items: '<'
    }
  });

})();
