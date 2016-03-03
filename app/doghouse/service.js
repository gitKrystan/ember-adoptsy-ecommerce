import Ember from 'ember';

export default Ember.Service.extend({
  dogs: [],

  add(dog) {
    this.get('dogs').pushObject(dog);
    console.log(this.get('dogs'))
  }
});
