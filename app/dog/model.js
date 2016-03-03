import DS from 'ember-data';

export default DS.Model.extend({
  doghouse: Ember.inject.service(),

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
  adoptedAt: DS.attr(),

  inDoghouse: Ember.computed('doghouse.dogs.[]', function() {
    return this.get('doghouse').includes(this);
  })
});
