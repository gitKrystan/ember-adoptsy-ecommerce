import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      breeds: this.store.findAll('breed')
    });
  },

  actions: {
    saveBreed(params) {
      var newBreed = this.store.createRecord('breed', params);
      newBreed.save();
    },

    saveDog(params) {
      var newDog = this.store.createRecord('dog', params);
      var breeds = params.breeds;
      breeds.map(function(breed) {
        return breed.get('dogs').addObject(newDog);
      });
      var breedSaves = breeds.map(function(breed) {
        return breed.save();
      });
      newDog.save().then(breedSaves).catch(function(reason) {
        return console.log(reason);
      });
    }
  }
});
