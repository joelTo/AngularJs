angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.highlighted = false;
    }

    highlight() {
        this.highlighted = true;
    }
})