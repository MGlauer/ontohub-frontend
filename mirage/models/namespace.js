import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  repositories: hasMany('repository')
});
