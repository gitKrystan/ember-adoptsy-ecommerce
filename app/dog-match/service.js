import Ember from 'ember';

export default Ember.Service.extend({
  dogs: [],
  observers: [],

  addDog(dogsToAdd) {
    var dogs = this.get('dogs');
    dogsToAdd.forEach(function(dog) {
      if (dog.get('name')) {
        dogs.addObject(dog);
      }
    })
    this.get('observers').forEach(function(observer) {
      console.log('observers called')
      observer();
    });
  },

  getDogs() {
    return this.get('dogs');
  },

  subscribe(callback) {
    console.log('subscription added')
    this.get('observers').push(callback);
  }
});
