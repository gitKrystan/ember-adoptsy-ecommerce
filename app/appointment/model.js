import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.attr(),
  phoneNumber: DS.attr(),
  time: DS.attr(),
  dogs: DS.hasMany('dog')
});
