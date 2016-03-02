import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveBreed(params) {
      var newBreed = this.store.createRecord('breed', params);
      newBreed.save();
    }
  }
});
