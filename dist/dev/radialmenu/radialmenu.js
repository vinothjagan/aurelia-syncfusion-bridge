System.register(['../common/common', 'ej.radialmenu.min'], function (_export) {
  'use strict';

  var customAttribute, inject, WidgetBase, constants, generateBindables, ejRadialMenu;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customAttribute = _commonCommon.customAttribute;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejRadialmenuMin) {}],
    execute: function () {
      ejRadialMenu = (function (_WidgetBase) {
        _inherits(ejRadialMenu, _WidgetBase);

        function ejRadialMenu(element) {
          _classCallCheck(this, _ejRadialMenu);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejRadialMenu = ejRadialMenu;
        ejRadialMenu = inject(Element)(ejRadialMenu) || ejRadialMenu;
        ejRadialMenu = generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'radius', 'targetElementId', 'position'])(ejRadialMenu) || ejRadialMenu;
        ejRadialMenu = customAttribute(constants.attributePrefix + 'radial-menu')(ejRadialMenu) || ejRadialMenu;
        return ejRadialMenu;
      })(WidgetBase);

      _export('ejRadialMenu', ejRadialMenu);
    }
  };
});
//# sourceMappingURL=../dist/dev/radialmenu/radialmenu.js.map
