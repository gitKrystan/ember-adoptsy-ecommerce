import Ember from 'ember';

export default Ember.Component.extend({
  doghouse: Ember.inject.service(),
  classNames: ['ado-dog-tile'],
});
