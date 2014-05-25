

define(['we','ember'], function (we) {

  App.HomeRoute = Ember.Route.extend({
    renderTemplate: function() {
      this.render('auth/registerForm', {
        into: 'application',
        outlet: 'highlighted',
        controller: 'AuthRegister'
      });
    }
  });

});