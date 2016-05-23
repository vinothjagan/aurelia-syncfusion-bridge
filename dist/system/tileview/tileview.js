System.register(['../common/common', 'ej.tile.min'], function (_export) {
  'use strict';

  var customElement, inlineView, inject, WidgetBase, constants, generateBindables, ejTileView;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_commonCommon) {
      customElement = _commonCommon.customElement;
      inlineView = _commonCommon.inlineView;
      inject = _commonCommon.inject;
      WidgetBase = _commonCommon.WidgetBase;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
    }, function (_ejTileMin) {}],
    execute: function () {
      ejTileView = (function (_WidgetBase) {
        _inherits(ejTileView, _WidgetBase);

        function ejTileView(element) {
          _classCallCheck(this, _ejTileView);

          _WidgetBase.call(this);
          this.element = element;
        }

        var _ejTileView = ejTileView;
        ejTileView = inject(Element)(ejTileView) || ejTileView;
        ejTileView = generateBindables('ejTileView', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'livetile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])(ejTileView) || ejTileView;
        ejTileView = inlineView('<template><content></content></template>')(ejTileView) || ejTileView;
        ejTileView = customElement(constants.elementPrefix + 'tile-view')(ejTileView) || ejTileView;
        return ejTileView;
      })(WidgetBase);

      _export('ejTileView', ejTileView);
    }
  };
});