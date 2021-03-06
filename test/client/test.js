
'use strict';

function bootstrap(f) {
  return function () {
    module(window.CONFIG.app);
    inject(f);
  }
}

describe('Sanity', function () {
  it('should have angular', function () {
    expect(angular).toBeDefined();
  });
});

describe('Basics', function () {

  var $ctrl, $loc, $params
  function deps($controller, $location, $routeParams) {
    $ctrl = $controller;
    $loc = $location;
    $params = $routeParams;
  }

  function viewCtrl(name) {
    $params.name = name;
    return $ctrl('ViewCtrl');
  }

  beforeEach(bootstrap(deps));

  describe('Hello', function () {
    it('should say hello', function () {
      var ctrl = viewCtrl('main');
      expect(ctrl.message).toBe('Hello');
    });
  });

});

