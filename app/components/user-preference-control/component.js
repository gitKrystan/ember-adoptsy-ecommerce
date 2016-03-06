import Ember from 'ember';

export default Ember.Component.extend({
  dogFilter: Ember.inject.service(),
  sizePreferences: [],
  setSizePreferences: Ember.observer('sizePreferences', function() {
    var preferenceObjects = this.get('sizePreferences');
    this.get('dogFilter').setSizePreferences(preferenceObjects);
  }),

  activityLevelPreferences: [],
  setActivityLevelPreferences: Ember.observer('activityLevelPreferences',
    function() {
    var preferenceObjects = this.get('activityLevelPreferences');
    this.get('dogFilter').setActivityLevelPreferences(preferenceObjects);
  }),
});
