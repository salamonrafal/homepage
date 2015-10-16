function ArticelsCtrl(message) {

  var vm = this;

  // exports
  vm.message = message;

}

ArticelsCtrl.resolve = {
  /* message: function (EmailService, $stateParams) {
    return EmailService.getEmail($stateParams.id);
  } */
};

angular
    .module('tm.homepage')
    .controller('ArticelsCtrl', ArticelsCtrl);
