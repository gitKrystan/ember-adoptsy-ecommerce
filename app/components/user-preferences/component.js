import Ember from 'ember';

export default Ember.Component.extend({
  userPreferences: Ember.inject.service(),
  setSizePreference: Ember.observer('sizePreference', function() {
    this.get('userPreferences').setSizePreference(this.get('sizePreference'));
  })
});
