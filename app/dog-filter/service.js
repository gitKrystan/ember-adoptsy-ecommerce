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

  preferences: {
    activityLevels: [],
    maintenanceLevels: [],
    sizes: []
  },
  setSizePreferences(preferenceObjects) {
    this.set('preferences.sizes', preferenceObjects);
    this.filterDogs();
  },

  allDogs: [],
  filteredDogs: [],

  loadAllDogs(dogsToAdd) {
    var allDogs = this.get('allDogs');
    var filteredDogs = this.get('filteredDogs');

    if (allDogs.length === 0) {
      allDogs.addObjects(dogsToAdd);
      filteredDogs.addObjects(dogsToAdd);
    }
  },

  filterDogs() {
    var allDogs = this.get('allDogs');
    var preferences = this.get('preferences');
    var sizePreferenceNames = preferences.sizes.mapBy('name');
    if (sizePreferenceNames.length > 0) {
      var matchedDogs = allDogs.filter(function(dog) {
        var dogBreeds = dog.get('breeds');
        return dogBreeds.any(function(breed) {
          return sizePreferenceNames.contains(breed.get('size').name);
        });
      });
      this.set('filteredDogs', matchedDogs);
    } else {
      this.set('filteredDogs', allDogs);
    }
  }
});
