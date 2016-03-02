import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  breed: DS.belongsTo('breed'),
  sex: DS.attr(),
  weight: DS.attr(),
  birthday: DS.attr(),
  fee: DS.attr(),
  description: DS.attr(),
  appointments: DS.hasMany('appointment'),
  available: DS.attr(),
  createdAt: DS.attr(),
  adoptedAt: DS.attr()
});
