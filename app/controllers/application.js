import Ember from 'ember';

export default Ember.Controller.extend({
  loginToken: Ember.inject.service('login-token'),
});
