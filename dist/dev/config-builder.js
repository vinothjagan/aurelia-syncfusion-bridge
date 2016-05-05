System.register([], function (_export) {
  'use strict';

  var EjConfigBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      EjConfigBuilder = (function () {
        function EjConfigBuilder() {
          _classCallCheck(this, EjConfigBuilder);

          this.resources = [];
          this.useGlobalResources = true;
        }

        EjConfigBuilder.prototype.useAll = function useAll() {

          this.ejGrid().ejChart().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejRating().ejListBox().ejListView().ejRotator().ejRTE().ejDropDownList().ejRadialMenu().ejTileView().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejDateTimePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejTemplate();
          return this;
        };

        EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        EjConfigBuilder.prototype.ejGrid = function ejGrid() {
          this.resources.push('./grid/grid');
          this.resources.push('./grid/column');
          return this;
        };

        EjConfigBuilder.prototype.ejChart = function ejChart() {
          this.resources.push('./chart/chart');
          this.resources.push('./chart/series');
          return this;
        };

        EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
          this.resources.push('./bulletgraph/bulletgraph');
          this.resources.push('./bulletgraph/qualitativeRange');
          return this;
        };

        EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
          this.resources.push('./circulargauge/circulargauge');
          return this;
        };

        EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
          this.resources.push('./lineargauge/lineargauge');
          return this;
        };

        EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
          this.resources.push('./digitalgauge/digitalgauge');
          return this;
        };

        EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
          this.resources.push('./splitter/splitter');
          return this;
        };

        EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
          this.resources.push('./datepicker/datepicker');
          return this;
        };

        EjConfigBuilder.prototype.ejGantt = function ejGantt() {
          this.resources.push('./gantt/gantt');
          return this;
        };

        EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
          this.resources.push('./colorpicker/colorpicker');
          return this;
        };

        EjConfigBuilder.prototype.ejDialog = function ejDialog() {
          this.resources.push('./dialog/dialog');
          return this;
        };

        EjConfigBuilder.prototype.ejScroller = function ejScroller() {
          this.resources.push('./scroller/scroller');
          return this;
        };

        EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
          this.resources.push('./barcode/barcode');
          return this;
        };

        EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
          this.resources.push('./pdfviewer/pdfviewer');
          return this;
        };

        EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
          this.resources.push('./numerictextbox/numerictextbox');
          return this;
        };

        EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
          this.resources.push('./currencytextbox/currencytextbox');
          return this;
        };

        EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
          this.resources.push('./percentagetextbox/percentagetextbox');
          return this;
        };

        EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
          this.resources.push('./timepicker/timepicker');
          return this;
        };

        EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
          this.resources.push('./toolbar/toolbar');
          return this;
        };

        EjConfigBuilder.prototype.ejMenu = function ejMenu() {
          this.resources.push('./menu/menu');
          return this;
        };

        EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
          this.resources.push('./maskedit/maskedit');
          return this;
        };

        EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
          this.resources.push('./treeview/treeview');
          return this;
        };

        EjConfigBuilder.prototype.ejKanban = function ejKanban() {
          this.resources.push('./kanban/kanban');
          this.resources.push('./kanban/kanbanColumn');
          return this;
        };

        EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
          this.resources.push('./ribbon/ribbon');
          return this;
        };

        EjConfigBuilder.prototype.ejRating = function ejRating() {
          this.resources.push('./rating/rating');
          return this;
        };

        EjConfigBuilder.prototype.ejListBox = function ejListBox() {
          this.resources.push('./listbox/listbox');
          return this;
        };

        EjConfigBuilder.prototype.ejListView = function ejListView() {
          this.resources.push('./listview/listview');
          this.resources.push('./listview/listViewItem');
          return this;
        };

        EjConfigBuilder.prototype.ejRotator = function ejRotator() {
          this.resources.push('./rotator/rotator');
          return this;
        };

        EjConfigBuilder.prototype.ejRTE = function ejRTE() {
          this.resources.push('./rte/rte');
          return this;
        };

        EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
          this.resources.push('./dropdownlist/dropdownlist');
          return this;
        };

        EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
          this.resources.push('./radialmenu/radialmenu');
          return this;
        };

        EjConfigBuilder.prototype.ejTileView = function ejTileView() {
          this.resources.push('./tileview/tileview');
          return this;
        };

        EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
          this.resources.push('./accordion/accordion');
          return this;
        };

        EjConfigBuilder.prototype.ejTab = function ejTab() {
          this.resources.push('./tab/tab');
          return this;
        };

        EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
          this.resources.push('./checkbox/checkbox');
          return this;
        };

        EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
          this.resources.push('./radiobutton/radiobutton');
          return this;
        };

        EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
          this.resources.push('./togglebutton/togglebutton');
          return this;
        };

        EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
          this.resources.push('./datetimepicker/datetimepicker');
          return this;
        };

        EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
          this.resources.push('./progressbar/progressbar');
          return this;
        };

        EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
          this.resources.push('./tagcloud/tagcloud');
          return this;
        };

        EjConfigBuilder.prototype.ejButton = function ejButton() {
          this.resources.push('./button/button');
          return this;
        };

        EjConfigBuilder.prototype.ejSlider = function ejSlider() {
          this.resources.push('./slider/slider');
          return this;
        };

        EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
          this.resources.push('./fileexplorer/fileexplorer');
          return this;
        };

        EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
          this.resources.push('./common/template');
          return this;
        };

        return EjConfigBuilder;
      })();

      _export('EjConfigBuilder', EjConfigBuilder);
    }
  };
});
//# sourceMappingURL=dist/dev/config-builder.js.map
