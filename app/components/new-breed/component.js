import Ember from 'ember';

export default Ember.Component.extend({
  nameIsValid: Ember.computed.notEmpty('name'),
  activityLevelIsValid: Ember.computed.notEmpty('activityLevel'),
  maintenanceLevelIsValid: Ember.computed.notEmpty('maintenanceLevel'),
  sizeIsValid: Ember.computed.notEmpty('size'),
  formIsValid: Ember.computed.and('nameIsValid',
      'activityLevelIsValid',
      'maintenanceLevelIsValid',
      'sizeIsValid'
    ),
  submitIsDisabled: Ember.computed.not('formIsValid'),

  activityLevels: [
    { name: 'low', description: 'couch potato' },
    { name: 'medium', description: 'long walks on the beach' },
    { name: 'high', description: 'mountaineer' },
  ],
  activityLevel: '',

  maintenanceLevels: [
    { name: 'low', description: 'go with the flow' },
    { name: 'medium', description: 'a little yappy' },
    { name: 'high', description: 'prima donna' },
  ],
  maintenanceLevel: '',

  sizes: [
    { name: 'extra-small', description: 'smaller than a breadbox' },
    { name: 'small', description: "can't reach the counter" },
    { name: 'medium', description: 'still fits on your lap' },
    { name: 'large', description: 'thinks he fits on your lap' },
    { name: 'extra-large', description: 'bear' },
  ],
  size: '',

  actions: {
    handleFocus(select, event) {
      select.actions.open();
    },

    selectActivityLevel(level) {
      this.set('activityLevel', level);
    },

    selectMaintenanceLevel(level) {
      this.set('maintenanceLevel', level);
    },

    selectSize(size) {
      this.set('size', size);
      console.log(this.get('size'));
    },

    saveBreed() {
      var params = {
        name: this.get('name'),
        size: this.get('size'),
        activity: this.get('activityLevel'),
        maintenance: this.get('maintenanceLevel')
      };

      this.sendAction('saveBreed', params);

      this.set('name', '');
      this.set('size', '');
      this.set('activityLevel', '');
      this.set('maintenanceLevel', '');
    }
  }
});
