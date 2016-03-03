import Ember from 'ember';

export default Ember.Component.extend({
  doghouse: Ember.inject.service(),

  classNames: ['modal-content'],

  primaryImage() {
    return this.get('dog').images.firstObject;
  },

  actions: {
    addToDoghouse(dog) {
      this.get('doghouse').add(dog);
    },

    removeFromDoghouse(dog) {
      this.get('doghouse').remove(dog);
    }
  }
});
