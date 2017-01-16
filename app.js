angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Male_mallard_standing.jpg/220px-Male_mallard_standing.jpg';
    }
})