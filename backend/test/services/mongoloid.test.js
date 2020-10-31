const assert = require('assert');
const app = require('../../src/app');

describe('\'mongoloid\' service', () => {
  it('registered the service', () => {
    const service = app.service('mongoloid');

    assert.ok(service, 'Registered the service');
  });
});
