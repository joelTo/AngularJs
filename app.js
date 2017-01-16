angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.users = [
            { name: 'un' },
            { name: 'deux' },
            { name: 'trois' },
            { name: 'quatre' },
        ]
    }
})

.filter('exclamation', function () {
    return (input, size = 1) => {
        if (typeof input !== 'string') return '';
        return input + '!'.repeat(size);
    }
})