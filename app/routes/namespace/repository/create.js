import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let r = this.store.createRecord('repository', {
      name: 'Foobaz',
      description: 'Barfaz'
    });

    r.save();

    return r;
  }
});
