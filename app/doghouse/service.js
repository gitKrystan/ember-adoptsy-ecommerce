import Ember from 'ember';

export default Ember.Service.extend({
  dogs: [],

  add(dog) {
    this.get('dogs').pushObject(dog);
  },

  remove(dog) {
    this.get('dogs').removeObject(dog);
  },

  includes(dog) {
    return this.get('dogs').includes(dog);
  },
});
