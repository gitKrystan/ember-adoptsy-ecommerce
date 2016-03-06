import Ember from 'ember';

export default Ember.Component.extend({
  dogFilter: Ember.inject.service(),

  init() {
    var dogFilter = this.get('dogFilter');
    dogFilter.loadAllDogs(this.get('dogs'));
    this._super();
  },

  classNames: ['ado-dog-list'],

  // filteredBreeds: Ember.computed.filter('breeds', function(breed) {
  //   // var breedSize = breed.get('size').name;
  //   // if (breedSize === 'small') {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  //
  //   return true;
  //
  //
  //
  //
  //   // var sizePreferences = this.get('dogFilter').get('sizePreference');
  //   // if (sizePreferences.length > 0) {
  //   //   var breedSize = breed.get('size').name;
  //   //   var breedMatches = false;
  //   //   for (var i = 0; i < sizePreferences.length; i ++) {
  //   //     var preference = sizePreferences[i];
  //   //     if (breedSize === preference.name) {
  //   //       breedMatches = true;
  //   //       break;
  //   //     }
  //   //   }
  //   //   return breedMatches;
  //   // } else {
  //   //   return true;
  //   // }
  // }),
  //
  // breedDogs: Ember.computed('filteredBreeds', function() {
  //   var component = this;
  //   var breeds = this.get('filteredBreeds');
  //   breeds.forEach(function(breed) {
  //     var dogsForTheBreed = breed.get('dogs');
  //     component.get('dogMatch').addDog(dogsForTheBreed);
  //   });
  // }),
});
