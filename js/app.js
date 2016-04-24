/**
 * Created by j on 2016/4/24.
 */
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // Home screen
            .state('home', {
                url: '/home',
                templateUrl: 'template/home.html',
                controller: 'HomeCtrl'
            })

          // View category
            .state('category', {
                url: '/category',
                templateUrl: 'template/category.html',
                controller: 'CategoryCtrl'
            })
            // Product detail
            /*.state('detail', {
                url: '/detail',
                templateUrl: 'template/detail.html',
                controller: 'DetailCtrl'
            })*/
            .state('detail', {
                url: '/detail/:id',
                templateUrl: 'template/detail.html',
                controller: 'DetailCtrl'
            })
            // Cart detail
          .state('cart', {
                url: '/cart',
                templateUrl: 'template/cart.html',
                controller: 'CartCtrl'
            })

            // login screen
            .state('login', {
                url: '/login',
                templateUrl: 'template/login.html',
                controller: 'AuthCtrl'
            })

            // register screen
            .state('register', {
                url: '/register',
                templateUrl: 'template/register.html',
                controller: 'AuthCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');

    });
