'use strict';

angular.module('quizApp').controller('ProfileController', function ($rootScope, getUserName) {
  getUserName.getUser();
});