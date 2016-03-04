import Ember from 'ember';

export function hotDog(params/*, hash*/) {
  var dog = params[0];
  if (dog.get('appointments').get('length') > 3) {
    var hotDogIcon = '<span class="glyphicon glyphicon-fire" ' +
        'aria-hidden="true"></span>';
    return Ember.String.htmlSafe(hotDogIcon);
  }
}

export default Ember.Helper.helper(hotDog);
