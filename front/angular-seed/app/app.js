'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'FileManagerApp'
])
.config(['$locationProvider', '$routeProvider', 'fileManagerConfigProvider', function($locationProvider, $routeProvider, config) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('View1Ctrl', [function() {}])
.run([function(){document.getElementById('start').style.visibility='hidden';}]);
