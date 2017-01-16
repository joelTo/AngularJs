angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',function() {
    console.log('MyFirstController');
    
    this.users = [
        {
            name: 'Thomas'
        },
        {
            name: 'Georges'
        }
    ];

    this.getUserName = (user) => user.name || 'Name Not Found';
})