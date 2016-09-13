import Ember from 'ember';
import DS from 'ember-data';
import ENV from "../config/environment";
const { underscore, pluralize } = Ember.String;

export default DS.JSONAPIAdapter.extend({
  // if your rails app is on a different port from your ember app
  // this can be helpful for development.
  // in production, the host for both rails and ember should be the same.
  host: ENV.host,
  loginToken: Ember.inject.service('login-token'),
  headers: Ember.computed('loginToken.token', function() {
    let token = this.get('loginToken.token');

    if(token) {
      return {
        "Authorization": `Bearer ${token}`
      };
    }
  }),

  // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },
});
