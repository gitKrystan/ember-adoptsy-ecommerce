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
      newDog.save().then(function() {
        console.log('successfully saved newDog');
        breeds.forEach(function(breed) {
          breed.get('dogs').addObject(newDog);
          breed.save().then(function() {
            console.log('successfully saved breed: ' + breed.get('name'));
          }, function(error) {
            console.log('error saving breed: ' + error.errors);
          });
        });
      }).catch(error => {
        console.log('error saving dog:');
        console.log(error.errors);
      });
    }
  }
});
