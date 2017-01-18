import angular from 'angular';
// Nouveau module
import ngRoute from 'angular-route';

import { ExclamationFilter } from './exclamation.filter';
import { EldestFilter } from './eldest.filter';
import { MyFirstController } from './my-first.controller';
import { UserService } from './user.service';

// Permet de faire dependre toute l'applicaiton de ce module
angular.module('app', [
  ngRoute
])


.controller('MyFirstController', MyFirstController)
.filter('exclamation', ExclamationFilter)
.filter('eldest', EldestFilter)
.service('UserService', UserService)

.config(function($routeProvider) {

  $routeProvider.when('/', {
    template: '<h1>Bienvenue</h1>'
  })

})

.value('Version', '1.0.0')


.run(function() {
  console.log('PizzaYOLO !');
})