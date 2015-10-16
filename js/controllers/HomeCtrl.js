function HomeCtrl(message) {

  var vm = this;

  // exports
  vm.message = message;

}

HomeCtrl.resolve = {
  /* message: function (EmailService, $stateParams) {
    return EmailService.getEmail($stateParams.id);
  } */
};

angular
    .module('tm.homepage')
    .controller('HomeCtrl', HomeCtrl);
