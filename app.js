angular.module('app', [])

.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',function() {    
    const u1 = { name: 'Thomas' };
    const u2 = { name: 'Georges'}; 
    this.users = [u1, u2, u2];

    this.startWithT = (user) => user.name[0] === 'T';
    this.filterUsers = () => this.users.filter(this.startWithT);

    this.show = () => {
        this.showme = true;
    }

})