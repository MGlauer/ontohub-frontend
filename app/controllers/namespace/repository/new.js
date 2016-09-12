import Ember from 'ember';

export default Ember.Controller.extend({
  repositoryName: "",
  actions: {
    saveRepository() {
      let model = this.store.createRecord('repository', {});
      model.name = this.get('repositoryName');
      model.description = this.get('repositoryDescription');

      model.save().then(() => {
        this.set('repositoryName', '');
        this.set('repositoryDescription', '');
        this.transitionToRoute('namespace.repository', model);
      }, () => {
        model.deleteRecord();
      });
    }
  }
});