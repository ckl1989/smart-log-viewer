import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('failed-tasklet-logs', 'Integration | Component | failed tasklet logs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{failed-tasklet-logs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#failed-tasklet-logs}}
      template block text
    {{/failed-tasklet-logs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
