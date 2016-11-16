import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type', 'q', 'content'],
  type: null,
  q: null,
  content: null,

  typeRepositories: Ember.computed('type', function() {
    let type = this.get('type');
    return (type == 'repositories') || (type == null);
  }),

  typeOMS: Ember.computed('type', function() {
    return (this.get('type') == 'oms');
  }),

  typeUsers: Ember.computed('type', function() {
    return (this.get('type') == 'users');
  })
});