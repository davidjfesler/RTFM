var app = angular.module('rtfmApp');

app.service('firebaseService', function ($firebase) {
    var firebaseUrl = 'https://myrtfmdm.firebaseio.com/user';

    this.getUser = function(userId){
        return $firebase(new Firebase(firebaseUrl + 'users/' + userId)).$asObject();
    };

    this.getThings = function(userId){
        return $firebase(new Firebase(firebaseUrl + 'users/' + userId + '/things')).$asArray();
    }
})