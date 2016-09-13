import Ember from 'ember';

export default Ember.Service.extend({
  token: Ember.computed({
    get(key) {
      return localStorage.getItem('login-token');
    },
    set(key, value) {
      localStorage.setItem('login-token', value);
      return value;
    }
  })
});
