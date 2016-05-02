var env;
describe("{{name}}", function() {
  before(function() {
    env = loadComp(require("../dev/env.vue"))
  })
  after(function() {
    unloadComp(env)
  })
  it('should be there', function() {
    expect(env).toEqual(jasmine.any(Object))
  })
})
