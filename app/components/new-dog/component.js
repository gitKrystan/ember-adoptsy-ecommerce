import Ember from 'ember';

export default Ember.Component.extend({
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
        caption: this.get('imageCaption')
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
