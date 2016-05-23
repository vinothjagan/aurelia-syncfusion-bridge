define(['exports', '../common/common', 'ej.rte.min'], function (exports, _commonCommon, _ejRteMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ejRTE = (function (_WidgetBase) {
    _inherits(ejRTE, _WidgetBase);

    function ejRTE(element) {
      _classCallCheck(this, _ejRTE);

      _WidgetBase.call(this);
      this.element = element;
    }

    var _ejRTE = ejRTE;
    ejRTE = _commonCommon.inject(Element)(ejRTE) || ejRTE;
    ejRTE = _commonCommon.generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], { 'enableRTL': 'enableRtl' })(ejRTE) || ejRTE;
    ejRTE = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'r-t-e')(ejRTE) || ejRTE;
    return ejRTE;
  })(_commonCommon.WidgetBase);

  exports.ejRTE = ejRTE;
});