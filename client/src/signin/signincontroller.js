angular.module('quizApp')
  .controller('SignInController', ["$http", "$state", "$window", "$rootScope", function($http, $state, $window, $rootScope){
    this.user;
    this.password;
    this.token=""

    $http.post('/questions', {token:$window.localStorage.accessToken})
      .then((res) => {
        $state.go('home');
        $rootScope.bg = false;
      },(res) => {

      });
    this.submit = function(){
      $http.post('/authenticate', {username: this.user, password: this.password})
        .then((res) => {
            if(res.data.message !== 'You aint in here'){
              $rootScope.bg = false;
              $window.localStorage.accessToken = res.data.token;
              $state.go('home');
            }
          });
      this.user = '';
      this.password='';

    }

  }]);