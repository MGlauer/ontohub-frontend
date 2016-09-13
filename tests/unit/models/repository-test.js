import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import Ember from 'ember';

describeModel(
  'repository',
  'Unit | Model | repository',
  {
    needs: ['model:namespace']
  },
  function() {
    it('has a name', function() {
      let model = this.subject({ name: 'Foobar' });
      expect(model.get('name')).to.equal('Foobar');
    });

    it('has a description', function() {
      let model = this.subject({ description: 'Some description' });
      expect(model.get('description')).to.equal('Some description');
    });

    it('belongs to a namespace', function() {
      let model = this.store().modelFor('repository');
      let relationship = Ember.get(model, 'relationshipsByName')
        .get('namespace');
      expect(relationship.key).to.equal('namespace');
      expect(relationship.kind).to.equal('belongsTo');
    });
  }
);
