import Ember from 'ember';

export default Ember.Component.extend({
  userPreferences: Ember.inject.service(),
  dogMatch: Ember.inject.service(),

  init() {
    this.get('breedDogs');
    this._super();
  },

  classNames: ['ado-dog-list'],

  filteredBreeds: Ember.computed.filter('breeds', function(breed) {
    var sizePreferences = this.get('userPreferences').get('sizePreference');
    if (sizePreferences.length > 0) {
      var breedSize = breed.get('size').name;
      var breedMatches = false;
      for (var i = 0; i < sizePreferences.length; i ++) {
        var preference = sizePreferences[i];
        if (breedSize === preference.name) {
          breedMatches = true;
          break;
        }
      }
      return breedMatches;
    } else if (sizePreferences.length === 0) {
      return true;
    } else {
      return false;
    }
  }),

  breedDogs: Ember.computed('filteredBreeds', function() {
    var component = this;
    var breeds = this.get('filteredBreeds');
    breeds.forEach(function(breed) {
      component.get('dogMatch').addDog(breed.get('dogs'));
    });
  }),
});
