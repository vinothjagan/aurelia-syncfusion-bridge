'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.radialmenu.min');

var ejRadialMenu = (function (_WidgetBase) {
  _inherits(ejRadialMenu, _WidgetBase);

  function ejRadialMenu(element) {
    _classCallCheck(this, _ejRadialMenu);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejRadialMenu = ejRadialMenu;
  ejRadialMenu = _commonCommon.inject(Element)(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _commonCommon.generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'radius', 'targetElementId', 'position'])(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'radial-menu')(ejRadialMenu) || ejRadialMenu;
  return ejRadialMenu;
})(_commonCommon.WidgetBase);

exports.ejRadialMenu = ejRadialMenu;