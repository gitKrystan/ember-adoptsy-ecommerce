import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      breeds: this.store.findAll('breed'),
      dogs: this.store.findAll('dog')
    });
  },

});
