import Ember from 'ember';

export default Ember.Service.extend({
  token: Ember.computed({
    get(_key) {
      return localStorage.getItem('login-token');
    },
    set(_key, value) {
      localStorage.setItem('login-token', value);
      return value;
    }
  })
});
