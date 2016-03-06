import Ember from 'ember';

export default Ember.Service.extend({
  activityLevels: [
    { name: 'low', description: 'couch potato' },
    { name: 'medium', description: 'long walks on the beach' },
    { name: 'high', description: 'mountaineer' },
  ],

  maintenanceLevels: [
    { name: 'low', description: 'go with the flow' },
    { name: 'medium', description: 'a little yappy' },
    { name: 'high', description: 'prima donna' },
  ],

  sizes: [
    { name: 'extra-small', description: 'smaller than a breadbox' },
    { name: 'small', description: "can't reach the counter" },
    { name: 'medium', description: 'still fits on your lap' },
    { name: 'large', description: 'thinks he fits on your lap' },
    { name: 'extra-large', description: 'bear' },
  ],
  sizePreference: [],
  setSizePreference(preference) {
    this.set('sizePreference', preference);
  }
});
