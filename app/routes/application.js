import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(error, transition) {
      return this.transitionTo('index');
    }
  }
});
