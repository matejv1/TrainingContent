(function () {
  'use strict';

  var outlookApp = angular.module('appowa');

  // load routes
  outlookApp.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', routeConfigurator]);

  function routeConfigurator($routeProvider, $httpProvider, adalProvider) {

    //Initialize ADAL
    adalProvider.init({
        tenant: "agile9.onmicrosoft.com",
        clientId: "617b7ea8-e597-4292-b9b0-bb6713b116d5",
        cacheLocation: "localStorage",
        endpoints: {
            'https://agile9.sharepoint.com/_api/': 'https://agile9.sharepoint.com',
            'https://agile9-my.sharepoint.com/_api/v1.0/me': 'https://agile9-my.sharepoint.com',
            'https://outlook.office365.com/api/v1.0/me': 'https://outlook.office365.com'
        }
    }, $httpProvider);
    
    $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeController',
          controllerAs: 'vm',
          requireADLogin: true
        })
        .when('/:customerID', {
          templateUrl: 'customers/customers-detail.html',
          controller: 'customersDetailController',
          controllerAs: 'vm'
        });

    $routeProvider.otherwise({redirectTo: '/'});
  }
})();