import steps from './steps';
import { expect } from 'chai';

// step definitions that are shared between features should be moved to the
// tests/acceptance/steps/steps.js file

export default function() {
  return steps()
    .then('I should see the top bar', (next) => {
      const elem = find('.top-bar');
      expect(elem.length).to.be.equal(1);
      next();
    })
    .then('I should see the app footer', (next) => {
      const elem = find('.app-footer');
      expect(elem.length).to.be.equal(1);
      next();
    });
}
