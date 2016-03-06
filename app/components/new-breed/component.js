import Ember from 'ember';

export default Ember.Component.extend({
  userPreferences: Ember.inject.service(),

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

  activityLevels: Ember.computed.alias('userPreferences.activityLevels'),
  activityLevel: '',

  maintenanceLevels: Ember.computed.alias('userPreferences.maintenanceLevels'),
  maintenanceLevel: '',

  sizes: Ember.computed.alias('userPreferences.sizes'),
  size: '',

  actions: {
    handleFocus(select) {
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
