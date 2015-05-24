var app = angular.module('rtfmApp');

app.service('threadService', function(fb, $firebaseArray){

    this.getThread = function(threadId){
        return new Firebase(fb.url + '/threads/' + threadId);
    }

    this.getThreads = function(){
        return new Firebase(fb.url + '/threads');
    }

    this.getComments = function(threadId) {
        return new Firebase(fb.url + '/threads/' + threadId + '/comments');
    }
    
})