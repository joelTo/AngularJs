angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.name = '';
        this.users = [
            { name: 'thomas' },
            { name: 'georges' },
            { name: 'jean' },
            { name: 'theo' },
            { name: 'nicolas' }
        ]
    }

    filter() {
        return this.users.filter(u => 
            u.name.includes(this.name)
        );
    }

})
