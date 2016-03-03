import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dog-modal-slide', 'Integration | Component | dog modal slide', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dog-modal-slide}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#dog-modal-slide}}
      template block text
    {{/dog-modal-slide}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
