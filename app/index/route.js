import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      dogs: this.store.findAll('dog'),
      breeds: this.store.findAll('breed'),
      appointments: this.store.findAll('appointment')
    });
  },

});
