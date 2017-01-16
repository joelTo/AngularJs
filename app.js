angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',function() {    
    this.users = [
        {
            name: 'Thomas'
        },
         {
            name: 'Thibaux'
        },
        {
            name: 'Orinox'
        },
        {
            name: 'Georges'
        }
    ];

    this.startWithT = (user) => user.name[0] === 'T';
})