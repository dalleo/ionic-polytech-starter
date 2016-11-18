/**
 * @module app.states.test2
 */
(function (module) {
  'use strict';

  var STATE_TEST2 = 'states.test2';

  function config($stateProvider) {
    $stateProvider.state(STATE_TEST2, {
      data: { module: module, navBar: true },
      url: '/test2',
      views: {
        'content-smartphone': {
          controller: 'test2Controller as test2Controller'
        }
      }
    });
  }

  function run($rootScope) { $rootScope.STATE_TEST2 = STATE_TEST2; }

  module.constant('STATE_TEST2', STATE_TEST2);
  module.config(['$stateProvider', config]);
  module.run(['$rootScope', run]);

}(angular.module('app.states.test2', ['app.states'])));
