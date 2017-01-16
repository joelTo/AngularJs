angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.users = [
            { name: 'un', age: 10 },
            { name: 'deux', age: 20 },
            { name: 'trois', age: 33 },
            { name: 'quatre', age: 42 },
        ];
        this.predicat = 'name';
        this.reverse = false;
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }
})

.filter('exclamation', function () {
    return (input, size = 1) => {
        if (typeof input !== 'string') return '';
        return input + '!'.repeat(size);
    }
})