angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.dte = new Date();
    }
})

.filter('pointexplamation', function () {
   return (input) => input + '!';
})