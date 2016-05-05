define(['exports', '../common/common', 'ej.tile.min'], function (exports, _commonCommon, _ejTileMin) {
    'use strict';

    exports.__esModule = true;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var ejTileView = (function (_WidgetBase) {
        _inherits(ejTileView, _WidgetBase);

        function ejTileView(element) {
            _classCallCheck(this, _ejTileView);

            _WidgetBase.call(this);
            this.element = element;
        }

        var _ejTileView = ejTileView;
        ejTileView = _commonCommon.inject(Element)(ejTileView) || ejTileView;
        ejTileView = _commonCommon.generateBindables('ejTileView', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'livetile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])(ejTileView) || ejTileView;
        ejTileView = _commonCommon.inlineView('<template><content></content></template>')(ejTileView) || ejTileView;
        ejTileView = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'tile-view')(ejTileView) || ejTileView;
        return ejTileView;
    })(_commonCommon.WidgetBase);

    exports.ejTileView = ejTileView;
});