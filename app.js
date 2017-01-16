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
            name: 'Georges'
        }
    ];

    this.startWithT = (user) => user.name[0] === 'T';
    
    this.filterUsers = () => this.users.filter(this.startWithT);

})