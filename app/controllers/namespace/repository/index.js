import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyRepository() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute('namespace.index');
      });
    }
  }
});
