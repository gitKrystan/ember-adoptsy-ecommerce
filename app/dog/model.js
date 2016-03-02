import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breeds: DS.hasMany('breed'),
  sex: DS.attr(),
  weight: DS.attr(),
  birthday: DS.attr(),
  fee: DS.attr(),
  description: DS.attr(),
  images: DS.attr(),
  appointments: DS.hasMany('appointment'),
  available: DS.attr(),
  createdAt: DS.attr(),
  adoptedAt: DS.attr()
});
