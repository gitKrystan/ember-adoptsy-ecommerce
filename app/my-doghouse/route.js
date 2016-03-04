import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    scheduleAppointment(params) {
      console.log('in route')
      var newAppointment = this.store.createRecord('appointment', params);
      var dogs = params.dogs;
      dogs.map(function(dog) {
        return dog.get('appointments').addObject(newAppointment);
      });
      var dogSaves = dogs.map(function(dog) {
        return dog.save();
      });
      newAppointment.save().then(dogSaves);
      this.transitionTo('index');
    }
  }
});
