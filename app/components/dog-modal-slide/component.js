import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal-content'],
  primaryImage() {
    return this.get('dog').images.firstObject;
  }
});
