angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.dte = new Date();
    }
})

.filter('toto', function () {
    return (input) => input.split('').reverse().join('');
})