angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {

    constructor() {
        const u1 = { name: 'Thomas' };
        const u2 = { name: 'Georges'}; 
        this.users = [u1, u2];
    }

    startWithT(user) { 
        return user.name[0] === 'T';
    }

    filterUsers() {
        this.users.filter(this.startWithT);
    }

    show(user) {
        user.show = true;
    }
})