angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // значение сортировки по умолчанию
  $scope.sortReverse  = false;  // обратная сортривка
  $scope.searchFish   = '';     // значение поиска по умолчанию

  var prod = {
    prod_1: 'Bread',
    prod_2: 'Milk',
    prod_3: 'iPhone',
    prod_4: 'TV',
    prod_5: 'F.Dostoevsky "Crime and Punishment"'
  };

  // список
  $scope.sales = [

    { num: '1', product: prod.prod_1, category: 'Food',       price: '$1' },
    { num: '2', product: prod.prod_2, category: 'Food',       price: '$2' },
    { num: '3', product: prod.prod_3, category: 'Electronic', price: '$699' },
    { num: '4', product: prod.prod_4, category: 'Electronic', price: '$1099' },
    { num: '5', product: prod.prod_5, category: 'Book',       price: '$8' }
  ];
});