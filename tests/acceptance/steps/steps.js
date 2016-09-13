import yadda from '../../helpers/yadda';

export default function() {
  return yadda.localisation.English.library()
    .given('I am on the "index" page', (next) => {
      visit('/');
      andThen(() => next());
    });
}
