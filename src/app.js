import angular from 'angular';
angular.module('app', [])


.run(function() {
  console.log('PizzaYOLO !');
})

.controller('MyFirstController',class MyFirstController {
    constructor() {
        this.users = [
            { name: 'Matthieu', age: 10 },
            { name: 'Arnaud', age: 20 },
            { name: 'Thomas', age: 33 },
            { name: 'Fawzi', age: 42 },
        ];
        this.predicat = 'name';
        this.reverse = false;
        this.err= false;

    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    save(form){
        if(form.$invalid){
            if(form.$dirty){
                this.err= true;
            }
        return;
        }
            this.users.push({
                name:this.newname,
                age:this.newage
                
            }) 
            this.err= false;   

    
    }
})

.filter('exclamation', function () {
    return (input, size = 1) => {
        if (typeof input !== 'string') return '';
        return input + '!'.repeat(size);
    }
})

.filter('doyen',function(){
    return (tableau)=>{
        var save=tableau[0];
        tableau.forEach(function(element) {
            if(element.age>save.age){
                save=element;
            }
                
        }, this);
        return save.name;
        
    }
})