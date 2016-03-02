import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-breed/selected-activity-level', 'Integration | Component | new breed/selected activity level', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{new-breed/selected-activity-level}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#new-breed/selected-activity-level}}
      template block text
    {{/new-breed/selected-activity-level}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
