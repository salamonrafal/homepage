angular
  .module('tm.homepage')
  .constant('API', {
    inbox: 'api/inbox.json',
    email: 'api/emails/{{id}}.json'
  });
