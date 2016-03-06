import Ember from 'ember';

export default Ember.Component.extend({
  dogFilter: Ember.inject.service(),
  sizePreferences: [],
  setSizePreference: Ember.observer('sizePreferences', function() {
    var sizePreferenceObjects = this.get('sizePreferences');
    this.get('dogFilter').setSizePreferences(sizePreferenceObjects);
  })
});
