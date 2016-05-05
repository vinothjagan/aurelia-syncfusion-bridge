System.register(['../common/common'], function (_export) {
  'use strict';

  var inlineView, customElement, children, constants, generateBindables, Util, ListViewItem;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_commonCommon) {
      inlineView = _commonCommon.inlineView;
      customElement = _commonCommon.customElement;
      children = _commonCommon.children;
      constants = _commonCommon.constants;
      generateBindables = _commonCommon.generateBindables;
      Util = _commonCommon.Util;
    }],
    execute: function () {
      ListViewItem = (function () {
        function ListViewItem() {
          _classCallCheck(this, _ListViewItem);
        }

        var _ListViewItem = ListViewItem;
        ListViewItem = generateBindables('items', [])(ListViewItem) || ListViewItem;
        ListViewItem = customElement(constants.elementPrefix + 'list-view-item')(ListViewItem) || ListViewItem;
        ListViewItem = inlineView('<template><content></content></template>')(ListViewItem) || ListViewItem;
        return ListViewItem;
      })();

      _export('ListViewItem', ListViewItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/listview/listviewitem.js.map
