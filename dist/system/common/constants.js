System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'e-on-',
        bindablePrefix: 'e-',
        attributePrefix: 'ej-',
        elementPrefix: 'ej-',
        aureliaTemplateString: '<template><slot></slot></template>'
      };

      _export('constants', constants);
    }
  };
});