import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  size: DS.attr(),
  activity: DS.attr(),
  maintenance: DS.attr(),
  dogs: DS.hasMany('dog')
});
