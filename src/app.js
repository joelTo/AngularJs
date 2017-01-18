import angular from 'angular';
// Nouveau module
import ngRoute from 'angular-route';

import { ExclamationFilter } from './exclamation.filter';
import { EldestFilter } from './eldest.filter';
import { MyFirstController } from './my-first.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';

// Permet de faire dependre toute l'applicaiton de ce module
angular.module('app', [
  ngRoute
])


.controller('MyFirstController', MyFirstController)
.controller('UserController', UserController)
.filter('exclamation', ExclamationFilter)
.filter('eldest', EldestFilter)
.service('UserService', UserService)

.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      template: '<h1>Bienvenue</h1>'
    })
    .when('/about', {
      template: '<h1>About ?</h1>'
    })
    .when('/users', {
      templateUrl: 'users.html',
      controller: 'MyFirstController',
      controllerAs: 'ctrl'
    })
   .when('/user/:id', {
      templateUrl: 'user.html',
      controller: 'UserController',
      controllerAs: 'ctrl'
    })
      .otherwise({
      redirectTo: '/'
    });

})

.value('Version', '1.0.0')


.run(function() {
  console.log('PizzaYOLO !');
})