var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);


    app.constant('fb', {
        url: 'https://myrtfmdm.firebaseIO.com'
    })
    app.config(function($routeProvider){
        $routeProvider
            .when('/threads', {
                templateUrl: 'threads/threads.html',
                controller: 'threadsCtrl',
                resolve: {
                    threadsRef: function(threadService){
                        return threadService.getThreads();
                    }
                }
            })
            .when('/threads/:threadId', {
                templateUrl: 'thread/thread.html',
                controller: 'threadCtrl',
                resolve: {
                    threadRef: function(threadService, $route) {
                        return threadService.getThread($route.current.params.threadId);
                    },
                    commentsRef: function(threadService, $route) {
                        return threadService.getComments($route.current.params.threadId)
                    }
                }
            })
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'LoginCtrl'
            })
            .when('/dashboard/:userId', {
                templateUrl: 'dashboard.html',
                controller: 'DashboardCtrl',
                resolve: {
                    userReference: function(firebaseService, $route){
                        return firebaseService.getUser($route.current.params.userId);
                    },
                    thingsReference: function(firebaseService, $route){
                        return firebaseService.getThings($route.current.params.userId);
                    }
                }
            })
            .otherwise({
                redirectTo: '/threads'
            })


    });