import Ember from 'ember';

export default Ember.Component.extend({
  nameIsValid: Ember.computed.notEmpty('name'),
  breedsIsValid: Ember.computed.notEmpty('breeds'),
  sexIsValid: Ember.computed.notEmpty('sex'),
  weightIsValid: Ember.computed.notEmpty('weight'),
  birthdayIsValid: Ember.computed.notEmpty('birthday'),
  feeIsValid: Ember.computed.notEmpty('fee'),
  descriptionIsValid: Ember.computed.gte('description.length', 100),
  imagesIsValid: Ember.computed.notEmpty('images'),
  formIsValid: Ember.computed.and(
      'nameIsValid',
      'breedsIsValid',
      'sexIsValid',
      'weightIsValid',
      'birthdayIsValid',
      'feeIsValid',
      'descriptionIsValid',
      'imagesIsValid'
    ),
  submitIsDisabled: Ember.computed.not('formIsValid'),

  imageUrlIsValid: Ember.computed.match('imageURL', /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?(\?([-a-zA-Z0-9@:%_\+.~#?&//=]+)|).(jpg|png|gif)/i),
  imageUploadIsDisabled: Ember.computed.not('imageUrlIsValid'),

  sortProperties: ['name'],
  sortedBreeds: Ember.computed.sort('allBreeds', 'sortProperties'),
  breeds: [],

  sexes: ['female', 'male'],
  sex: '',

  images: [],

  actions: {
    handleFocus(select, event) {
      select.actions.open();
    },

    selectSex(sex) {
      this.set('sex', sex);
    },

    addImage() {
      var image = {
        url: this.get('imageURL'),
        caption: this.get('imageCaption') || ''
      };
      this.get('images').pushObject(image);
      this.set('imageURL', '');
      this.set('imageCaption', '');
    },

    removeImage(image) {
      this.get('images').removeObject(image);
    },

    saveDog() {
      var params = {
        name: this.get('name'),
        breeds: this.get('breeds'),
        sex: this.get('sex'),
        weight: this.get('weight'),
        birthday: this.get('birthday'),
        fee: this.get('fee'),
        description: this.get('description'),
        images: this.get('images'),
        appointments: [],
        available: true,
        createdAt: Date.now(),
        adoptedAt: null
      };

      this.sendAction('saveDog', params);

      this.set('name', '');
      this.set('breeds', []);
      this.set('sex', '');
      this.set('weight', '');
      this.set('birthday', '');
      this.set('fee', '');
      this.set('description', '');
      this.set('images', []);
    }
  }
});
