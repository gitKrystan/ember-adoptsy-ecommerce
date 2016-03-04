import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  doghouse: Ember.inject.service(),

  stepOneIsShowing: true,
  stepTwoIsShowing: false,

  tomorrow: Ember.computed(function() {
    return moment().add(1, 'days').format('YYYY-MM-DD[T09:00]');
  }),
  oneWeekFromToday: Ember.computed(function() {
    return moment().add(7, 'days').format('YYYY-MM-DD[T16:00]');
  }),

  actions: {
    finishStepOne() {
      this.toggleProperty('stepOneIsShowing');
      this.toggleProperty('stepTwoIsShowing');
    },

    scheduleAppointment() {
      var params = {
        customer: this.get('name'),
        phoneNumber: this.get('phoneNumber'),
        time: this.get('appointmentTime'),
        dogs: this.get('doghouse').dogs
      }
      console.log('in component')
      this.sendAction('scheduleAppointment', params)
    }
  }
});
