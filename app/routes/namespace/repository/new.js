import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('model', this.modelFor('namespace'));
    this._super(controller, model);
  }
});
