import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'repository',
  'Unit | Model | repository',
  {
    // Specify the other units that are required for this test.
    needs: []
  },
  function() {
    // Replace this with your real tests.
    it('has a name', function() {
      let model = server.createList('repository', 1);
      console.log(model);
    });
  }
);
