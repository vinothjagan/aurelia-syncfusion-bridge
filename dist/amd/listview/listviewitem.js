define(['exports', '../common/common'], function (exports, _commonCommon) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ListViewItem = (function () {
    function ListViewItem() {
      _classCallCheck(this, _ListViewItem);
    }

    var _ListViewItem = ListViewItem;
    ListViewItem = _commonCommon.generateBindables('items', [])(ListViewItem) || ListViewItem;
    ListViewItem = _commonCommon.customElement(_commonCommon.constants.elementPrefix + 'list-view-item')(ListViewItem) || ListViewItem;
    ListViewItem = _commonCommon.inlineView('<template><content></content></template>')(ListViewItem) || ListViewItem;
    return ListViewItem;
  })();

  exports.ListViewItem = ListViewItem;
});