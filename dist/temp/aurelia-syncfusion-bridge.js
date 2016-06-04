'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.getEventOption = getEventOption;
exports.fireEvent = fireEvent;

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

require('ej.accordion.min');

require('ej.autocomplete.min');

require('datavisualization/ej.barcode.min');

require('datavisualization/ej.bulletgraph.min');

require('ej.button.min');

require('datavisualization/ej.chart.min');

require('ej.checkbox.min');

require('datavisualization/ej.circulargauge.min');

require('ej.colorpicker.min');

require('ej.editor.min');

require('ej.datepicker.min');

require('ej.datetimepicker.min');

require('datavisualization/ej.diagram.min');

require('ej.dialog.min');

require('datavisualization/ej.digitalgauge.min');

require('ej.dropdownlist.min');

require('ej.fileexplorer.min');

require('ej.gantt.min');

require('ej.grid.min');

require('ej.groupbutton.min');

require('ej.kanban.min');

require('datavisualization/ej.lineargauge.min');

require('ej.listbox.min');

require('ej.listview.min');

require('datavisualization/ej.map.min');

require('ej.maskedit.min');

require('ej.menu.min');

require('ej.navigationdrawer.min');

require('ej.editor.min');

require('ej.pdfviewer.min');

require('ej.editor.min');

require('ej.pivotchart.min');

require('ej.pivotgrid.min');

require('ej.pivotschemadesigner.min');

require('ej.progressbar.min');

require('ej.radialmenu.min');

require('ej.radialslider.min');

require('ej.radiobutton.min');

require('datavisualization/ej.rangenavigator.min');

require('ej.rating.min');

require('ej.reportviewer.min');

require('ej.ribbon.min');

require('ej.rotator.min');

require('ej.rte.min');

require('ej.schedule.min');

require('common/ej.scroller.min');

require('ej.slider.min');

require('ej.splitbutton.min');

require('ej.splitter.min');

require('ej.spreadsheet.min');

require('datavisualization/ej.diagram.min');

require('ej.tab.min');

require('ej.tagcloud.min');

require('ej.tile.min');

require('ej.timepicker.min');

require('ej.togglebutton.min');

require('ej.toolbar.min');

require('ej.tooltip.min');

require('ej.treegrid.min');

require('datavisualization/ej.treemap.min');

require('ej.treeview.min');

require('ej.uploadbox.min');

require('ej.waitingpopup.min');

var EjConfigBuilder = (function () {
  function EjConfigBuilder() {
    _classCallCheck(this, EjConfigBuilder);

    this.resources = [];
    this.useGlobalResources = true;
  }

  EjConfigBuilder.prototype.useAll = function useAll() {
    this.ejGrid().ejChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejSymbolPalette().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotSchemaDesigner().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejTooltip().ejTemplate();
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

  EjConfigBuilder.prototype.ejMap = function ejMap() {
    this.resources.push('./map/map');
    this.resources.push('./map/layer');
    return this;
  };

  EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
    this.resources.push('./treemap/treemap');
    this.resources.push('./treemap/level');
    return this;
  };

  EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
    this.resources.push('./rangenavigator/rangenavigator');
    this.resources.push('./rangenavigator/rangeseries');
    return this;
  };

  EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
    this.resources.push('./diagram/diagram');
    return this;
  };

  EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
    this.resources.push('./symbolpalette/symbolpalette');
    return this;
  };

  EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
    this.resources.push('./bulletgraph/bulletgraph');
    this.resources.push('./bulletgraph/qualitativerange');
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

  EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
    this.resources.push('./treegrid/treegrid');
    this.resources.push('./treegrid/treegridcolumn');
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
    this.resources.push('./kanban/kanbancolumn');
    return this;
  };

  EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
    this.resources.push('./ribbon/ribbon');
    return this;
  };

  EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
    this.resources.push('./spreadsheet/spreadsheet');
    this.resources.push('./spreadsheet/sheet');
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
    return this;
  };

  EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
    this.resources.push('./navigationdrawer/navigationdrawer');
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

  EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  };

  EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
    this.resources.push('./radialmenu/radialmenu');
    this.resources.push('./radialmenu/item');
    return this;
  };

  EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
    this.resources.push('./radialslider/radialslider');
    return this;
  };

  EjConfigBuilder.prototype.ejTile = function ejTile() {
    this.resources.push('./tile/tile');
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

  EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
    this.resources.push('./splitbutton/splitbutton');
    return this;
  };

  EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
    this.resources.push('./groupbutton/groupbutton');
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

  EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
    this.resources.push('./pivotgrid/pivotgrid');
    return this;
  };

  EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
    this.resources.push('./pivotchart/pivotchart');
    return this;
  };

  EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
    this.resources.push('./pivotschemadesigner/pivotschemadesigner');
    return this;
  };

  EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
    this.resources.push('./waitingpopup/waitingpopup');
    return this;
  };

  EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
    this.resources.push('./reportviewer/reportviewer');
    return this;
  };

  EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
    this.resources.push('./schedule/schedule');
    this.resources.push('./schedule/scheduleresource');
    return this;
  };

  EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
    this.resources.push('./uploadbox/uploadbox');
    return this;
  };

  EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
    this.resources.push('./tooltip/tooltip');
    return this;
  };

  EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
    this.resources.push('./common/template');
    return this;
  };

  return EjConfigBuilder;
})();

exports.EjConfigBuilder = EjConfigBuilder;

function configure(aurelia, configCallback) {
  var builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

var ejAccordion = (function (_WidgetBase) {
  _inherits(ejAccordion, _WidgetBase);

  function ejAccordion(element) {
    _classCallCheck(this, _ejAccordion);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejAccordion = ejAccordion;
  ejAccordion = _aureliaDependencyInjection.inject(Element)(ejAccordion) || ejAccordion;
  ejAccordion = generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': 'enableRtl' })(ejAccordion) || ejAccordion;
  ejAccordion = _aureliaTemplating.inlineView('<template><content></content></template>')(ejAccordion) || ejAccordion;
  ejAccordion = _aureliaTemplating.customElement(constants.elementPrefix + 'accordion')(ejAccordion) || ejAccordion;
  return ejAccordion;
})(WidgetBase);

exports.ejAccordion = ejAccordion;

var ejAutocomplete = (function (_WidgetBase2) {
  _inherits(ejAutocomplete, _WidgetBase2);

  function ejAutocomplete(element) {
    _classCallCheck(this, _ejAutocomplete);

    _WidgetBase2.call(this);
    this.element = element;
  }

  var _ejAutocomplete = ejAutocomplete;
  ejAutocomplete = _aureliaDependencyInjection.inject(Element)(ejAutocomplete) || ejAutocomplete;
  ejAutocomplete = generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'minCharacter', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], { 'enableRTL': 'enableRtl' })(ejAutocomplete) || ejAutocomplete;
  ejAutocomplete = _aureliaTemplating.customAttribute(constants.attributePrefix + 'autocomplete')(ejAutocomplete) || ejAutocomplete;
  return ejAutocomplete;
})(WidgetBase);

exports.ejAutocomplete = ejAutocomplete;

var ejBarcode = (function (_WidgetBase3) {
  _inherits(ejBarcode, _WidgetBase3);

  function ejBarcode(element) {
    _classCallCheck(this, _ejBarcode);

    _WidgetBase3.call(this);
    this.element = element;
  }

  var _ejBarcode = ejBarcode;
  ejBarcode = _aureliaDependencyInjection.inject(Element)(ejBarcode) || ejBarcode;
  ejBarcode = generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])(ejBarcode) || ejBarcode;
  ejBarcode = _aureliaTemplating.inlineView('<template><content></content></template>')(ejBarcode) || ejBarcode;
  ejBarcode = _aureliaTemplating.customElement(constants.elementPrefix + 'barcode')(ejBarcode) || ejBarcode;
  return ejBarcode;
})(WidgetBase);

exports.ejBarcode = ejBarcode;

var ejBulletGraph = (function (_WidgetBase4) {
  var _instanceInitializers = {};

  _inherits(ejBulletGraph, _WidgetBase4);

  _createDecoratedClass(ejBulletGraph, [{
    key: 'qualitativeRanges',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'qualitative-range')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function ejBulletGraph(element) {
    _classCallCheck(this, _ejBulletGraph);

    _WidgetBase4.call(this);

    _defineDecoratedPropertyDescriptor(this, 'qualitativeRanges', _instanceInitializers);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'qualitativeRanges';
  }

  var _ejBulletGraph = ejBulletGraph;
  ejBulletGraph = _aureliaDependencyInjection.inject(Element)(ejBulletGraph) || ejBulletGraph;
  ejBulletGraph = generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'flowDirection', 'height', 'isResponsive', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width'])(ejBulletGraph) || ejBulletGraph;
  ejBulletGraph = _aureliaTemplating.inlineView('<template><content></content></template>')(ejBulletGraph) || ejBulletGraph;
  ejBulletGraph = _aureliaTemplating.customElement(constants.elementPrefix + 'bullet-graph')(ejBulletGraph) || ejBulletGraph;
  return ejBulletGraph;
})(WidgetBase);

exports.ejBulletGraph = ejBulletGraph;

var QualitativeRange = (function () {
  function QualitativeRange() {
    _classCallCheck(this, _QualitativeRange);
  }

  var _QualitativeRange = QualitativeRange;
  QualitativeRange = generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])(QualitativeRange) || QualitativeRange;
  QualitativeRange = _aureliaTemplating.customElement(constants.elementPrefix + 'qualitative-range')(QualitativeRange) || QualitativeRange;
  QualitativeRange = _aureliaTemplating.inlineView('<template><content></content></template>')(QualitativeRange) || QualitativeRange;
  return QualitativeRange;
})();

exports.QualitativeRange = QualitativeRange;

var ejButton = (function (_WidgetBase5) {
  _inherits(ejButton, _WidgetBase5);

  function ejButton(element) {
    _classCallCheck(this, _ejButton);

    _WidgetBase5.call(this);
    this.element = element;
  }

  var _ejButton = ejButton;
  ejButton = _aureliaDependencyInjection.inject(Element)(ejButton) || ejButton;
  ejButton = generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': 'enableRtl' })(ejButton) || ejButton;
  ejButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'button')(ejButton) || ejButton;
  return ejButton;
})(WidgetBase);

exports.ejButton = ejButton;

var ejChart = (function (_WidgetBase6) {
  var _instanceInitializers2 = {};

  _inherits(ejChart, _WidgetBase6);

  _createDecoratedClass(ejChart, [{
    key: 'series',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'series')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers2);

  function ejChart(element) {
    _classCallCheck(this, _ejChart);

    _WidgetBase6.call(this);

    _defineDecoratedPropertyDescriptor(this, 'series', _instanceInitializers2);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }

  var _ejChart = ejChart;
  ejChart = _aureliaDependencyInjection.inject(Element)(ejChart) || ejChart;
  ejChart = generateBindables('ejChart', ['annotations', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'Margin', 'perspectiveAngle', 'primaryXAxis', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming'])(ejChart) || ejChart;
  ejChart = _aureliaTemplating.inlineView('<template><content></content></template>')(ejChart) || ejChart;
  ejChart = _aureliaTemplating.customElement(constants.elementPrefix + 'chart')(ejChart) || ejChart;
  return ejChart;
})(WidgetBase);

exports.ejChart = ejChart;

var Series = (function () {
  function Series() {
    _classCallCheck(this, _Series);
  }

  var _Series = Series;
  Series = generateBindables('series', ['bearFillColor', 'border', 'bullFillColor', 'dashArray', 'dataSource', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'labelPosition', 'lineCap', 'lineJoin', 'marker', 'opacity', 'palette', 'pieCoefficient', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'errorBar', 'points', 'pyramidMode', 'query', 'startAngle', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'size', 'trendlines', 'highlightSettings', 'selectionSettings'])(Series) || Series;
  Series = _aureliaTemplating.customElement(constants.elementPrefix + 'series')(Series) || Series;
  Series = _aureliaTemplating.inlineView('<template><content></content></template>')(Series) || Series;
  return Series;
})();

exports.Series = Series;

var ejCheckBox = (function (_WidgetBase7) {
  _inherits(ejCheckBox, _WidgetBase7);

  function ejCheckBox(element) {
    _classCallCheck(this, _ejCheckBox);

    _WidgetBase7.call(this);
    this.element = element;
  }

  var _ejCheckBox = ejCheckBox;
  ejCheckBox = _aureliaDependencyInjection.inject(Element)(ejCheckBox) || ejCheckBox;
  ejCheckBox = generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'], { 'enableRTL': 'enableRtl' })(ejCheckBox) || ejCheckBox;
  ejCheckBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'check-box')(ejCheckBox) || ejCheckBox;
  return ejCheckBox;
})(WidgetBase);

exports.ejCheckBox = ejCheckBox;

var ejCircularGauge = (function (_WidgetBase8) {
  _inherits(ejCircularGauge, _WidgetBase8);

  function ejCircularGauge(element) {
    _classCallCheck(this, _ejCircularGauge);

    _WidgetBase8.call(this);
    this.element = element;
  }

  var _ejCircularGauge = ejCircularGauge;
  ejCircularGauge = _aureliaDependencyInjection.inject(Element)(ejCircularGauge) || ejCircularGauge;
  ejCircularGauge = generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejCircularGauge) || ejCircularGauge;
  ejCircularGauge = _aureliaTemplating.inlineView('<template><content></content></template>')(ejCircularGauge) || ejCircularGauge;
  ejCircularGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'circular-gauge')(ejCircularGauge) || ejCircularGauge;
  return ejCircularGauge;
})(WidgetBase);

exports.ejCircularGauge = ejCircularGauge;

var ejColorPicker = (function (_WidgetBase9) {
  _inherits(ejColorPicker, _WidgetBase9);

  function ejColorPicker(element) {
    _classCallCheck(this, _ejColorPicker);

    _WidgetBase9.call(this);
    this.element = element;
  }

  var _ejColorPicker = ejColorPicker;
  ejColorPicker = _aureliaDependencyInjection.inject(Element)(ejColorPicker) || ejColorPicker;
  ejColorPicker = generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue'])(ejColorPicker) || ejColorPicker;
  ejColorPicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'color-picker')(ejColorPicker) || ejColorPicker;
  return ejColorPicker;
})(WidgetBase);

exports.ejColorPicker = ejColorPicker;
exports.customAttribute = _aureliaTemplating.customAttribute;
exports.bindable = _aureliaTemplating.bindable;
exports.inject = _aureliaDependencyInjection.inject;
exports.WidgetBase = WidgetBase;
exports.constants = constants;
exports.generateBindables = generateBindables;
exports.inlineView = _aureliaTemplating.inlineView;
exports.customElement = _aureliaTemplating.customElement;
exports.children = _aureliaTemplating.children;
exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
exports.TemplateProcessor = TemplateProcessor;
exports.Util = Util;
var constants = {
  eventPrefix: 'e-on-',
  bindablePrefix: 'e-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-'
};

exports.constants = constants;

function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(Util);
    inputs.push('options');
    var len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (var i = 0; i < len; i++) {
        var option = inputs[i];
        if (abbrevProperties && option in abbrevProperties) {
          option = abbrevProperties[option];
        }
        var nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}

function getEventOption(element) {
  var name = undefined;
  var attr = undefined;
  var attributes = element.attributes;
  var option = {};
  var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
  var util = container.get(Util);

  var _loop = function (i, len) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      return 'continue';
    }
    var actualEventName = name.split('.')[0];
    var eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = function (e) {
      return fireEvent(element, actualEventName, e);
    };
  };

  for (var i = 0, len = attributes.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === 'continue') continue;
  }
  return option;
}

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

var TemplateProcessor = (function () {
  function TemplateProcessor(context, templateEngine) {
    _classCallCheck(this, _TemplateProcessor);

    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  TemplateProcessor.prototype.initTemplate = function initTemplate() {
    var proxy = this;
    ej.template.render = function (self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  };

  TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
    if (this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    var proxy = this.context;
    var element = this.context.widget.element;
    element.on(this.context.widget.pluginName + 'refresh', function () {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  };

  TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
    var templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    var scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    var actElement = $(selector).html();
    var tempElement = "<div class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  };

  TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
    var templates = $(element).find('.ej-aurelia-template');
    var templateObject = this.context.widget.aureliaTemplate;
    for (var template in templateObject) {
      var tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (var i = 0; i < tmplElement.length; i++) {
          var view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[i]);
          templateObject[template].views[i] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  };

  TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
    var templateObject = this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (var t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  };

  TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
    for (var i = 0; i < obj.views.length; i++) {
      var view = obj.views[i];
      view.unbind();
    }
  };

  var _TemplateProcessor = TemplateProcessor;
  TemplateProcessor = _aureliaDependencyInjection.inject(_aureliaTemplating.TemplatingEngine, Util)(TemplateProcessor) || TemplateProcessor;
  return TemplateProcessor;
})();

exports.TemplateProcessor = TemplateProcessor;

var Template = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(Template, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function Template(target) {
    _classCallCheck(this, _Template);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers3);

    this.template = target.elementInstruction.template;
  }

  var _Template = Template;
  Template = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(Template) || Template;
  Template = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }
    return true;
  })(Template) || Template;
  Template = _aureliaTemplating.noView()(Template) || Template;
  Template = _aureliaTemplating.customElement(constants.elementPrefix + 'template')(Template) || Template;
  return Template;
})();

exports.Template = Template;

var Util = (function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
    var name = '' + constants.bindablePrefix + propertyName;
    return this._unhyphenate(name);
  };

  Util.prototype._unhyphenate = function _unhyphenate(name) {
    return name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  Util.prototype.getOptions = function getOptions(model, properties) {
    var bindableproperites = {};
    var value = undefined;
    for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      if (model.abbrevProperties && prop in model.abbrevProperties) {
        value = model[this.getBindablePropertyName(model.abbrevProperties[prop])];
      } else {
        value = model[this.getBindablePropertyName(prop)];
      }
      if (this.hasValue(value)) {
        if (typeof value === 'string') {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  };

  Util.prototype.getControlPropertyName = function getControlPropertyName(options, propertyName) {
    var property = undefined;
    for (var _iterator2 = options.controlProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  };

  Util.prototype.hasValue = function hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  };

  Util.prototype.processData = function processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  };

  return Util;
})();

exports.Util = Util;

var firstValue = {};

var WidgetBase = (function () {
  function WidgetBase() {
    _classCallCheck(this, WidgetBase);
  }

  WidgetBase.prototype.createWidget = function createWidget(option) {
    var _this = this;

    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions && !this.isEditor) {
      this.createTwoWays();
    }
    this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
    if (this.isEditor) {
      this.widget.model._change = function (evt) {
        if ('eValue' in _this) {
          _this[_this.util.getBindablePropertyName('value')] = evt.value;
        }
      };
    }
  };

  WidgetBase.prototype.createTwoWays = function createTwoWays() {
    var model = this.allOption;
    var twoWays = this.twoWays;
    var len = twoWays.length;
    for (var i = 0; i < len; i++) {
      var prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  };

  WidgetBase.prototype.addTwoways = function addTwoways(prop) {
    var model = this;
    var value = firstValue;
    return function (newVal, isApp) {
      if (value === firstValue) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal)) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
      return null;
    };
  };

  WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
    var propOptions = undefined;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    var eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  };

  WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
    var PropertyName = this.childPropertyName;
    var childCollection = this[PropertyName];
    var len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      var childProperties = childCollection[0].controlProperties;
      for (var i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  };

  WidgetBase.prototype.attached = function attached() {
    this.util = new Util();
    this.createWidget({ element: this.element });
  };

  WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      var modelValue = undefined;
      var prop = this.util.getControlPropertyName(this, property);
      if (prop) {
        if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          var isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(prop);
            }
            this.widget.option(prop, newValue);
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    this.widget.destroy();
  };

  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var ejCurrencyTextbox = (function (_WidgetBase10) {
  _inherits(ejCurrencyTextbox, _WidgetBase10);

  function ejCurrencyTextbox(element) {
    _classCallCheck(this, _ejCurrencyTextbox);

    _WidgetBase10.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejCurrencyTextbox = ejCurrencyTextbox;
  ejCurrencyTextbox = _aureliaDependencyInjection.inject(Element)(ejCurrencyTextbox) || ejCurrencyTextbox;
  ejCurrencyTextbox = generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejCurrencyTextbox) || ejCurrencyTextbox;
  ejCurrencyTextbox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'currency-textbox')(ejCurrencyTextbox) || ejCurrencyTextbox;
  return ejCurrencyTextbox;
})(WidgetBase);

exports.ejCurrencyTextbox = ejCurrencyTextbox;

var ejDatePicker = (function (_WidgetBase11) {
  _inherits(ejDatePicker, _WidgetBase11);

  function ejDatePicker(element) {
    _classCallCheck(this, _ejDatePicker);

    _WidgetBase11.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejDatePicker = ejDatePicker;
  ejDatePicker = _aureliaDependencyInjection.inject(Element)(ejDatePicker) || ejDatePicker;
  ejDatePicker = generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejDatePicker) || ejDatePicker;
  ejDatePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'date-picker')(ejDatePicker) || ejDatePicker;
  return ejDatePicker;
})(WidgetBase);

exports.ejDatePicker = ejDatePicker;

var ejDateTimePicker = (function (_WidgetBase12) {
  _inherits(ejDateTimePicker, _WidgetBase12);

  function ejDateTimePicker(element) {
    _classCallCheck(this, _ejDateTimePicker);

    _WidgetBase12.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejDateTimePicker = ejDateTimePicker;
  ejDateTimePicker = _aureliaDependencyInjection.inject(Element)(ejDateTimePicker) || ejDateTimePicker;
  ejDateTimePicker = generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejDateTimePicker) || ejDateTimePicker;
  ejDateTimePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'date-time-picker')(ejDateTimePicker) || ejDateTimePicker;
  return ejDateTimePicker;
})(WidgetBase);

exports.ejDateTimePicker = ejDateTimePicker;

var ejDiagram = (function (_WidgetBase13) {
  _inherits(ejDiagram, _WidgetBase13);

  function ejDiagram(element) {
    _classCallCheck(this, _ejDiagram);

    _WidgetBase13.call(this);
    this.element = element;
  }

  var _ejDiagram = ejDiagram;
  ejDiagram = _aureliaDependencyInjection.inject(Element)(ejDiagram) || ejDiagram;
  ejDiagram = generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'layout', 'locale', 'nodes', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor'])(ejDiagram) || ejDiagram;
  ejDiagram = _aureliaTemplating.inlineView('<template><content></content></template>')(ejDiagram) || ejDiagram;
  ejDiagram = _aureliaTemplating.customElement(constants.elementPrefix + 'diagram')(ejDiagram) || ejDiagram;
  return ejDiagram;
})(WidgetBase);

exports.ejDiagram = ejDiagram;

var ejDialog = (function (_WidgetBase14) {
  _inherits(ejDialog, _WidgetBase14);

  function ejDialog(element) {
    _classCallCheck(this, _ejDialog);

    _WidgetBase14.call(this);
    this.element = element;
  }

  var _ejDialog = ejDialog;
  ejDialog = _aureliaDependencyInjection.inject(Element)(ejDialog) || ejDialog;
  ejDialog = generateBindables('ejDialog', ['actionButtons', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex'], [], { 'enableRTL': 'enableRtl' })(ejDialog) || ejDialog;
  ejDialog = _aureliaTemplating.inlineView('<template><content></content></template>')(ejDialog) || ejDialog;
  ejDialog = _aureliaTemplating.customElement(constants.elementPrefix + 'dialog')(ejDialog) || ejDialog;
  return ejDialog;
})(WidgetBase);

exports.ejDialog = ejDialog;

var ejDigitalGauge = (function (_WidgetBase15) {
  _inherits(ejDigitalGauge, _WidgetBase15);

  function ejDigitalGauge(element) {
    _classCallCheck(this, _ejDigitalGauge);

    _WidgetBase15.call(this);
    this.element = element;
  }

  var _ejDigitalGauge = ejDigitalGauge;
  ejDigitalGauge = _aureliaDependencyInjection.inject(Element)(ejDigitalGauge) || ejDigitalGauge;
  ejDigitalGauge = generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])(ejDigitalGauge) || ejDigitalGauge;
  ejDigitalGauge = _aureliaTemplating.inlineView('<template><content></content></template>')(ejDigitalGauge) || ejDigitalGauge;
  ejDigitalGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'digital-gauge')(ejDigitalGauge) || ejDigitalGauge;
  return ejDigitalGauge;
})(WidgetBase);

exports.ejDigitalGauge = ejDigitalGauge;

var ejDropDownList = (function (_WidgetBase16) {
  _inherits(ejDropDownList, _WidgetBase16);

  function ejDropDownList(element) {
    _classCallCheck(this, _ejDropDownList);

    _WidgetBase16.call(this);
    this.element = element;
  }

  var _ejDropDownList = ejDropDownList;
  ejDropDownList = _aureliaDependencyInjection.inject(Element)(ejDropDownList) || ejDropDownList;
  ejDropDownList = generateBindables('ejDropDownList', ['cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejDropDownList) || ejDropDownList;
  ejDropDownList = _aureliaTemplating.customAttribute(constants.attributePrefix + 'drop-down-list')(ejDropDownList) || ejDropDownList;
  return ejDropDownList;
})(WidgetBase);

exports.ejDropDownList = ejDropDownList;

var ejFileExplorer = (function (_WidgetBase17) {
  _inherits(ejFileExplorer, _WidgetBase17);

  function ejFileExplorer(element) {
    _classCallCheck(this, _ejFileExplorer);

    _WidgetBase17.call(this);
    this.element = element;
  }

  var _ejFileExplorer = ejFileExplorer;
  ejFileExplorer = _aureliaDependencyInjection.inject(Element)(ejFileExplorer) || ejFileExplorer;
  ejFileExplorer = generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'], [], { 'enableRTL': 'enableRtl' })(ejFileExplorer) || ejFileExplorer;
  ejFileExplorer = _aureliaTemplating.inlineView('<template><content></content></template>')(ejFileExplorer) || ejFileExplorer;
  ejFileExplorer = _aureliaTemplating.customElement(constants.elementPrefix + 'file-explorer')(ejFileExplorer) || ejFileExplorer;
  return ejFileExplorer;
})(WidgetBase);

exports.ejFileExplorer = ejFileExplorer;

var ejGantt = (function (_WidgetBase18) {
  _inherits(ejGantt, _WidgetBase18);

  function ejGantt(element) {
    _classCallCheck(this, _ejGantt);

    _WidgetBase18.call(this);
    this.element = element;
  }

  var _ejGantt = ejGantt;
  ejGantt = _aureliaDependencyInjection.inject(Element)(ejGantt) || ejGantt;
  ejGantt = generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'enablePredecessorValidation', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'childMapping', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'durationMapping', 'durationUnit', 'editDialogFields', 'splitterSettings', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enableProgressBarResizing', 'enableResize', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'endDateMapping', 'highlightWeekends', 'holidays', 'includeWeekend', 'locale', 'milestoneMapping', 'parentProgressbarBackground', 'parentTaskbarBackground', 'parentTaskIdMapping', 'predecessorMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'progressMapping', 'query', 'renderBaseline', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resources', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedItem', 'selectedRowIndex', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'startDateMapping', 'stripLines', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'taskIdMapping', 'taskNameMapping', 'toolbarSettings', 'treeColumnIndex', 'weekendBackground', 'workingTimeScale'], ['dataSource', 'selectedRowIndex'])(ejGantt) || ejGantt;
  ejGantt = _aureliaTemplating.inlineView('<template><content></content></template>')(ejGantt) || ejGantt;
  ejGantt = _aureliaTemplating.customElement(constants.elementPrefix + 'gantt')(ejGantt) || ejGantt;
  return ejGantt;
})(WidgetBase);

exports.ejGantt = ejGantt;

var Column = (function () {
  var _instanceInitializers4 = {};

  function Column() {
    _classCallCheck(this, _Column);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers4);
  }

  Column.prototype.bind = function bind() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  _createDecoratedClass(Column, [{
    key: 'template',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers4);

  var _Column = Column;
  Column = generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate', 'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'])(Column) || Column;
  Column = _aureliaTemplating.customElement(constants.elementPrefix + 'column')(Column) || Column;
  Column = _aureliaTemplating.inlineView('<template><content></content></template>')(Column) || Column;
  return Column;
})();

exports.Column = Column;

var ejGrid = (function (_WidgetBase19) {
  var _instanceInitializers5 = {};

  _inherits(ejGrid, _WidgetBase19);

  _createDecoratedClass(ejGrid, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'column')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers5);

  function ejGrid(element, templateEngine) {
    _classCallCheck(this, _ejGrid);

    _WidgetBase19.call(this);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers5);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  var _ejGrid = ejGrid;
  ejGrid = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.TemplatingEngine)(ejGrid) || ejGrid;
  ejGrid = generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource'], { 'enableRTL': 'enableRtl' })(ejGrid) || ejGrid;
  ejGrid = _aureliaTemplating.inlineView('<template><content></content></template>')(ejGrid) || ejGrid;
  ejGrid = _aureliaTemplating.customElement(constants.elementPrefix + 'grid')(ejGrid) || ejGrid;
  return ejGrid;
})(WidgetBase);

exports.ejGrid = ejGrid;

var ejGroupButton = (function (_WidgetBase20) {
  _inherits(ejGroupButton, _WidgetBase20);

  function ejGroupButton(element) {
    _classCallCheck(this, _ejGroupButton);

    _WidgetBase20.call(this);
    this.element = element;
  }

  var _ejGroupButton = ejGroupButton;
  ejGroupButton = _aureliaDependencyInjection.inject(Element)(ejGroupButton) || ejGroupButton;
  ejGroupButton = generateBindables('ejGroupButton', ['cssClass', 'enableRTL', 'enabled', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': 'enableRtl' })(ejGroupButton) || ejGroupButton;
  ejGroupButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'group-button')(ejGroupButton) || ejGroupButton;
  return ejGroupButton;
})(WidgetBase);

exports.ejGroupButton = ejGroupButton;

var ejKanban = (function (_WidgetBase21) {
  var _instanceInitializers6 = {};

  _inherits(ejKanban, _WidgetBase21);

  _createDecoratedClass(ejKanban, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'kanban-column')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers6);

  function ejKanban(element) {
    _classCallCheck(this, _ejKanban);

    _WidgetBase21.call(this);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers6);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
  }

  var _ejKanban = ejKanban;
  ejKanban = _aureliaDependencyInjection.inject(Element)(ejKanban) || ejKanban;
  ejKanban = generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'locale'], ['dataSource'], { 'enableRTL': 'enableRtl' })(ejKanban) || ejKanban;
  ejKanban = _aureliaTemplating.inlineView('<template><content></content></template>')(ejKanban) || ejKanban;
  ejKanban = _aureliaTemplating.customElement(constants.elementPrefix + 'kanban')(ejKanban) || ejKanban;
  return ejKanban;
})(WidgetBase);

exports.ejKanban = ejKanban;

var KanbanColumn = (function () {
  function KanbanColumn() {
    _classCallCheck(this, _KanbanColumn);
  }

  var _KanbanColumn = KanbanColumn;
  KanbanColumn = generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton'])(KanbanColumn) || KanbanColumn;
  KanbanColumn = _aureliaTemplating.customElement(constants.elementPrefix + 'kanban-column')(KanbanColumn) || KanbanColumn;
  KanbanColumn = _aureliaTemplating.inlineView('<template><content></content></template>')(KanbanColumn) || KanbanColumn;
  return KanbanColumn;
})();

exports.KanbanColumn = KanbanColumn;

var ejLinearGauge = (function (_WidgetBase22) {
  _inherits(ejLinearGauge, _WidgetBase22);

  function ejLinearGauge(element) {
    _classCallCheck(this, _ejLinearGauge);

    _WidgetBase22.call(this);
    this.element = element;
  }

  var _ejLinearGauge = ejLinearGauge;
  ejLinearGauge = _aureliaDependencyInjection.inject(Element)(ejLinearGauge) || ejLinearGauge;
  ejLinearGauge = generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame', 'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejLinearGauge) || ejLinearGauge;
  ejLinearGauge = _aureliaTemplating.inlineView('<template><content></content></template>')(ejLinearGauge) || ejLinearGauge;
  ejLinearGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'linear-gauge')(ejLinearGauge) || ejLinearGauge;
  return ejLinearGauge;
})(WidgetBase);

exports.ejLinearGauge = ejLinearGauge;

var ejListBox = (function (_WidgetBase23) {
  _inherits(ejListBox, _WidgetBase23);

  function ejListBox(element) {
    _classCallCheck(this, _ejListBox);

    _WidgetBase23.call(this);
    this.element = element;
  }

  var _ejListBox = ejListBox;
  ejListBox = _aureliaDependencyInjection.inject(Element)(ejListBox) || ejListBox;
  ejListBox = generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejListBox) || ejListBox;
  ejListBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'list-box')(ejListBox) || ejListBox;
  return ejListBox;
})(WidgetBase);

exports.ejListBox = ejListBox;

var ejListView = (function (_WidgetBase24) {
  _inherits(ejListView, _WidgetBase24);

  function ejListView(element) {
    _classCallCheck(this, _ejListView);

    _WidgetBase24.call(this);
    this.element = element;
  }

  var _ejListView = ejListView;
  ejListView = _aureliaDependencyInjection.inject(Element)(ejListView) || ejListView;
  ejListView = generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource', 'selectedItemIndex'])(ejListView) || ejListView;
  ejListView = _aureliaTemplating.inlineView('<template><content></content></template>')(ejListView) || ejListView;
  ejListView = _aureliaTemplating.customElement(constants.elementPrefix + 'list-view')(ejListView) || ejListView;
  return ejListView;
})(WidgetBase);

exports.ejListView = ejListView;

var Layer = (function () {
  function Layer() {
    _classCallCheck(this, _Layer);
  }

  var _Layer = Layer;
  Layer = generateBindables('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'enableAnimation', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate'])(Layer) || Layer;
  Layer = _aureliaTemplating.customElement(constants.elementPrefix + 'layer')(Layer) || Layer;
  Layer = _aureliaTemplating.inlineView('<template><content></content></template>')(Layer) || Layer;
  return Layer;
})();

exports.Layer = Layer;

var ejMap = (function (_WidgetBase25) {
  var _instanceInitializers7 = {};

  _inherits(ejMap, _WidgetBase25);

  _createDecoratedClass(ejMap, [{
    key: 'layers',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'layer')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers7);

  function ejMap(element) {
    _classCallCheck(this, _ejMap);

    _WidgetBase25.call(this);

    _defineDecoratedPropertyDescriptor(this, 'layers', _instanceInitializers7);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'layers';
  }

  var _ejMap = ejMap;
  ejMap = _aureliaDependencyInjection.inject(Element)(ejMap) || ejMap;
  ejMap = generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'enableAnimation', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'zoomSettings', 'navigationControl', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition'])(ejMap) || ejMap;
  ejMap = _aureliaTemplating.inlineView('<template><content></content></template>')(ejMap) || ejMap;
  ejMap = _aureliaTemplating.customElement(constants.elementPrefix + 'map')(ejMap) || ejMap;
  return ejMap;
})(WidgetBase);

exports.ejMap = ejMap;

var ejMaskEdit = (function (_WidgetBase26) {
  _inherits(ejMaskEdit, _WidgetBase26);

  function ejMaskEdit(element) {
    _classCallCheck(this, _ejMaskEdit);

    _WidgetBase26.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejMaskEdit = ejMaskEdit;
  ejMaskEdit = _aureliaDependencyInjection.inject(Element)(ejMaskEdit) || ejMaskEdit;
  ejMaskEdit = generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'maskFormat', 'name', 'readOnly', 'showError', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])(ejMaskEdit) || ejMaskEdit;
  ejMaskEdit = _aureliaTemplating.customAttribute(constants.attributePrefix + 'mask-edit')(ejMaskEdit) || ejMaskEdit;
  return ejMaskEdit;
})(WidgetBase);

exports.ejMaskEdit = ejMaskEdit;

var ejMenu = (function (_WidgetBase27) {
  _inherits(ejMenu, _WidgetBase27);

  function ejMenu(element) {
    _classCallCheck(this, _ejMenu);

    _WidgetBase27.call(this);
    this.element = element;
  }

  var _ejMenu = ejMenu;
  ejMenu = _aureliaDependencyInjection.inject(Element)(ejMenu) || ejMenu;
  ejMenu = generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejMenu) || ejMenu;
  ejMenu = _aureliaTemplating.customAttribute(constants.attributePrefix + 'menu')(ejMenu) || ejMenu;
  return ejMenu;
})(WidgetBase);

exports.ejMenu = ejMenu;

var ejNavigationDrawer = (function (_WidgetBase28) {
  _inherits(ejNavigationDrawer, _WidgetBase28);

  function ejNavigationDrawer(element) {
    _classCallCheck(this, _ejNavigationDrawer);

    _WidgetBase28.call(this);
    this.element = element;
  }

  var _ejNavigationDrawer = ejNavigationDrawer;
  ejNavigationDrawer = _aureliaDependencyInjection.inject(Element)(ejNavigationDrawer) || ejNavigationDrawer;
  ejNavigationDrawer = generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width'])(ejNavigationDrawer) || ejNavigationDrawer;
  ejNavigationDrawer = _aureliaTemplating.inlineView('<template><content></content></template>')(ejNavigationDrawer) || ejNavigationDrawer;
  ejNavigationDrawer = _aureliaTemplating.customElement(constants.elementPrefix + 'navigation-drawer')(ejNavigationDrawer) || ejNavigationDrawer;
  return ejNavigationDrawer;
})(WidgetBase);

exports.ejNavigationDrawer = ejNavigationDrawer;

var ejNumericTextbox = (function (_WidgetBase29) {
  _inherits(ejNumericTextbox, _WidgetBase29);

  function ejNumericTextbox(element) {
    _classCallCheck(this, _ejNumericTextbox);

    _WidgetBase29.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejNumericTextbox = ejNumericTextbox;
  ejNumericTextbox = _aureliaDependencyInjection.inject(Element)(ejNumericTextbox) || ejNumericTextbox;
  ejNumericTextbox = generateBindables('ejNumericTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejNumericTextbox) || ejNumericTextbox;
  ejNumericTextbox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'numeric-textbox')(ejNumericTextbox) || ejNumericTextbox;
  return ejNumericTextbox;
})(WidgetBase);

exports.ejNumericTextbox = ejNumericTextbox;

var ejPdfViewer = (function (_WidgetBase30) {
  _inherits(ejPdfViewer, _WidgetBase30);

  function ejPdfViewer(element) {
    _classCallCheck(this, _ejPdfViewer);

    _WidgetBase30.call(this);
    this.element = element;
  }

  var _ejPdfViewer = ejPdfViewer;
  ejPdfViewer = _aureliaDependencyInjection.inject(Element)(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService'])(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _aureliaTemplating.inlineView('<template><content></content></template>')(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _aureliaTemplating.customElement(constants.elementPrefix + 'pdf-viewer')(ejPdfViewer) || ejPdfViewer;
  return ejPdfViewer;
})(WidgetBase);

exports.ejPdfViewer = ejPdfViewer;

var ejPercentageTextbox = (function (_WidgetBase31) {
  _inherits(ejPercentageTextbox, _WidgetBase31);

  function ejPercentageTextbox(element) {
    _classCallCheck(this, _ejPercentageTextbox);

    _WidgetBase31.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejPercentageTextbox = ejPercentageTextbox;
  ejPercentageTextbox = _aureliaDependencyInjection.inject(Element)(ejPercentageTextbox) || ejPercentageTextbox;
  ejPercentageTextbox = generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' })(ejPercentageTextbox) || ejPercentageTextbox;
  ejPercentageTextbox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'percentage-textbox')(ejPercentageTextbox) || ejPercentageTextbox;
  return ejPercentageTextbox;
})(WidgetBase);

exports.ejPercentageTextbox = ejPercentageTextbox;

var ejPivotChart = (function (_WidgetBase32) {
  _inherits(ejPivotChart, _WidgetBase32);

  function ejPivotChart(element) {
    _classCallCheck(this, _ejPivotChart);

    _WidgetBase32.call(this);
    this.element = element;
  }

  var _ejPivotChart = ejPivotChart;
  ejPivotChart = _aureliaDependencyInjection.inject(Element)(ejPivotChart) || ejPivotChart;
  ejPivotChart = generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'commonSeriesOptions', 'currentReport', 'dataSource', 'customObject', 'enable3D', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'serviceMethodSettings', 'size', 'url'])(ejPivotChart) || ejPivotChart;
  ejPivotChart = _aureliaTemplating.inlineView('<template><content></content></template>')(ejPivotChart) || ejPivotChart;
  ejPivotChart = _aureliaTemplating.customElement(constants.elementPrefix + 'pivot-chart')(ejPivotChart) || ejPivotChart;
  return ejPivotChart;
})(WidgetBase);

exports.ejPivotChart = ejPivotChart;

var ejPivotGrid = (function (_WidgetBase33) {
  _inherits(ejPivotGrid, _WidgetBase33);

  function ejPivotGrid(element) {
    _classCallCheck(this, _ejPivotGrid);

    _WidgetBase33.call(this);
    this.element = element;
  }

  var _ejPivotGrid = ejPivotGrid;
  ejPivotGrid = _aureliaDependencyInjection.inject(Element)(ejPivotGrid) || ejPivotGrid;
  ejPivotGrid = generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], { 'enableRTL': 'enableRtl' })(ejPivotGrid) || ejPivotGrid;
  ejPivotGrid = _aureliaTemplating.inlineView('<template><content></content></template>')(ejPivotGrid) || ejPivotGrid;
  ejPivotGrid = _aureliaTemplating.customElement(constants.elementPrefix + 'pivot-grid')(ejPivotGrid) || ejPivotGrid;
  return ejPivotGrid;
})(WidgetBase);

exports.ejPivotGrid = ejPivotGrid;

var ejPivotSchemaDesigner = (function (_WidgetBase34) {
  _inherits(ejPivotSchemaDesigner, _WidgetBase34);

  function ejPivotSchemaDesigner(element) {
    _classCallCheck(this, _ejPivotSchemaDesigner);

    _WidgetBase34.call(this);
    this.element = element;
  }

  var _ejPivotSchemaDesigner = ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _aureliaDependencyInjection.inject(Element)(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'filters', 'height', 'locale', 'pivotCalculations', 'pivotColumns', 'pivotControl', 'pivotRows', 'pivotTableFields', 'serviceMethod', 'url', 'width'])(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _aureliaTemplating.inlineView('<template><content></content></template>')(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  ejPivotSchemaDesigner = _aureliaTemplating.customElement(constants.elementPrefix + 'pivot-schema-designer')(ejPivotSchemaDesigner) || ejPivotSchemaDesigner;
  return ejPivotSchemaDesigner;
})(WidgetBase);

exports.ejPivotSchemaDesigner = ejPivotSchemaDesigner;

var ejProgressBar = (function (_WidgetBase35) {
  _inherits(ejProgressBar, _WidgetBase35);

  function ejProgressBar(element) {
    _classCallCheck(this, _ejProgressBar);

    _WidgetBase35.call(this);
    this.element = element;
  }

  var _ejProgressBar = ejProgressBar;
  ejProgressBar = _aureliaDependencyInjection.inject(Element)(ejProgressBar) || ejProgressBar;
  ejProgressBar = generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': 'enableRtl' })(ejProgressBar) || ejProgressBar;
  ejProgressBar = _aureliaTemplating.customAttribute(constants.attributePrefix + 'progress-bar')(ejProgressBar) || ejProgressBar;
  return ejProgressBar;
})(WidgetBase);

exports.ejProgressBar = ejProgressBar;

var Item = (function () {
  var _instanceInitializers8 = {};

  function Item() {
    _classCallCheck(this, _Item);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers8);
  }

  Item.prototype.bind = function bind() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  _createDecoratedClass(Item, [{
    key: 'template',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers8);

  var _Item = Item;
  Item = generateBindables('items', ['imageUrl', 'text', 'enabled', 'click', 'type'])(Item) || Item;
  Item = _aureliaTemplating.customElement(constants.elementPrefix + 'item')(Item) || Item;
  Item = _aureliaTemplating.inlineView('<template><content></content></template>')(Item) || Item;
  return Item;
})();

exports.Item = Item;

var ejRadialMenu = (function (_WidgetBase36) {
  var _instanceInitializers9 = {};

  _inherits(ejRadialMenu, _WidgetBase36);

  _createDecoratedClass(ejRadialMenu, [{
    key: 'items',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'item')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers9);

  function ejRadialMenu(element, templateEngine) {
    _classCallCheck(this, _ejRadialMenu);

    _WidgetBase36.call(this);

    _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers9);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'items';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  var _ejRadialMenu = ejRadialMenu;
  ejRadialMenu = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.TemplatingEngine)(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position'])(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _aureliaTemplating.inlineView('<template><content></content></template>')(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _aureliaTemplating.customElement(constants.elementPrefix + 'radial-menu')(ejRadialMenu) || ejRadialMenu;
  return ejRadialMenu;
})(WidgetBase);

exports.ejRadialMenu = ejRadialMenu;

var ejRadialSlider = (function (_WidgetBase37) {
  _inherits(ejRadialSlider, _WidgetBase37);

  function ejRadialSlider(element) {
    _classCallCheck(this, _ejRadialSlider);

    _WidgetBase37.call(this);
    this.element = element;
  }

  var _ejRadialSlider = ejRadialSlider;
  ejRadialSlider = _aureliaDependencyInjection.inject(Element)(ejRadialSlider) || ejRadialSlider;
  ejRadialSlider = generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'radius', 'strokeWidth'])(ejRadialSlider) || ejRadialSlider;
  ejRadialSlider = _aureliaTemplating.customAttribute(constants.attributePrefix + 'radial-slider')(ejRadialSlider) || ejRadialSlider;
  return ejRadialSlider;
})(WidgetBase);

exports.ejRadialSlider = ejRadialSlider;

var ejRadioButton = (function (_WidgetBase38) {
  _inherits(ejRadioButton, _WidgetBase38);

  function ejRadioButton(element) {
    _classCallCheck(this, _ejRadioButton);

    _WidgetBase38.call(this);
    this.element = element;
  }

  var _ejRadioButton = ejRadioButton;
  ejRadioButton = _aureliaDependencyInjection.inject(Element)(ejRadioButton) || ejRadioButton;
  ejRadioButton = generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], { 'enableRTL': 'enableRtl' })(ejRadioButton) || ejRadioButton;
  ejRadioButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'radio-button')(ejRadioButton) || ejRadioButton;
  return ejRadioButton;
})(WidgetBase);

exports.ejRadioButton = ejRadioButton;

var ejRangeNavigator = (function (_WidgetBase39) {
  var _instanceInitializers10 = {};

  _inherits(ejRangeNavigator, _WidgetBase39);

  _createDecoratedClass(ejRangeNavigator, [{
    key: 'series',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'range-series')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers10);

  function ejRangeNavigator(element) {
    _classCallCheck(this, _ejRangeNavigator);

    _WidgetBase39.call(this);

    _defineDecoratedPropertyDescriptor(this, 'series', _instanceInitializers10);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }

  var _ejRangeNavigator = ejRangeNavigator;
  ejRangeNavigator = _aureliaDependencyInjection.inject(Element)(ejRangeNavigator) || ejRangeNavigator;
  ejRangeNavigator = generateBindables('ejRangeNavigator', ['allowSnapping', 'border', 'dataSource', 'enableDeferredUpdate', 'enableScrollbar', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': 'enableRtl' })(ejRangeNavigator) || ejRangeNavigator;
  ejRangeNavigator = _aureliaTemplating.inlineView('<template><content></content></template>')(ejRangeNavigator) || ejRangeNavigator;
  ejRangeNavigator = _aureliaTemplating.customElement(constants.elementPrefix + 'range-navigator')(ejRangeNavigator) || ejRangeNavigator;
  return ejRangeNavigator;
})(WidgetBase);

exports.ejRangeNavigator = ejRangeNavigator;

var RangeSeries = (function () {
  function RangeSeries() {
    _classCallCheck(this, _RangeSeries);
  }

  var _RangeSeries = RangeSeries;
  RangeSeries = generateBindables('series', [])(RangeSeries) || RangeSeries;
  RangeSeries = _aureliaTemplating.customElement(constants.elementPrefix + 'range-series')(RangeSeries) || RangeSeries;
  RangeSeries = _aureliaTemplating.inlineView('<template><content></content></template>')(RangeSeries) || RangeSeries;
  return RangeSeries;
})();

exports.RangeSeries = RangeSeries;

var ejRating = (function (_WidgetBase40) {
  _inherits(ejRating, _WidgetBase40);

  function ejRating(element) {
    _classCallCheck(this, _ejRating);

    _WidgetBase40.call(this);
    this.element = element;
  }

  var _ejRating = ejRating;
  ejRating = _aureliaDependencyInjection.inject(Element)(ejRating) || ejRating;
  ejRating = generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])(ejRating) || ejRating;
  ejRating = _aureliaTemplating.customAttribute(constants.attributePrefix + 'rating')(ejRating) || ejRating;
  return ejRating;
})(WidgetBase);

exports.ejRating = ejRating;

var ejReportViewer = (function (_WidgetBase41) {
  _inherits(ejReportViewer, _WidgetBase41);

  function ejReportViewer(element) {
    _classCallCheck(this, _ejReportViewer);

    _WidgetBase41.call(this);
    this.element = element;
  }

  var _ejReportViewer = ejReportViewer;
  ejReportViewer = _aureliaDependencyInjection.inject(Element)(ejReportViewer) || ejReportViewer;
  ejReportViewer = generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor'])(ejReportViewer) || ejReportViewer;
  ejReportViewer = _aureliaTemplating.inlineView('<template><content></content></template>')(ejReportViewer) || ejReportViewer;
  ejReportViewer = _aureliaTemplating.customElement(constants.elementPrefix + 'report-viewer')(ejReportViewer) || ejReportViewer;
  return ejReportViewer;
})(WidgetBase);

exports.ejReportViewer = ejReportViewer;

var ejRibbon = (function (_WidgetBase42) {
  _inherits(ejRibbon, _WidgetBase42);

  function ejRibbon(element) {
    _classCallCheck(this, _ejRibbon);

    _WidgetBase42.call(this);
    this.element = element;
  }

  var _ejRibbon = ejRibbon;
  ejRibbon = _aureliaDependencyInjection.inject(Element)(ejRibbon) || ejRibbon;
  ejRibbon = generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'])(ejRibbon) || ejRibbon;
  ejRibbon = _aureliaTemplating.inlineView('<template><content></content></template>')(ejRibbon) || ejRibbon;
  ejRibbon = _aureliaTemplating.customElement(constants.elementPrefix + 'ribbon')(ejRibbon) || ejRibbon;
  return ejRibbon;
})(WidgetBase);

exports.ejRibbon = ejRibbon;

var ejRotator = (function (_WidgetBase43) {
  _inherits(ejRotator, _WidgetBase43);

  function ejRotator(element) {
    _classCallCheck(this, _ejRotator);

    _WidgetBase43.call(this);
    this.element = element;
  }

  var _ejRotator = ejRotator;
  ejRotator = _aureliaDependencyInjection.inject(Element)(ejRotator) || ejRotator;
  ejRotator = generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'thumbnailSourceID'], [], { 'enableRTL': 'enableRtl', 'thumbnailSourceID': 'thumbnailSourceId' })(ejRotator) || ejRotator;
  ejRotator = _aureliaTemplating.customAttribute(constants.attributePrefix + 'rotator')(ejRotator) || ejRotator;
  return ejRotator;
})(WidgetBase);

exports.ejRotator = ejRotator;

var ejRte = (function (_WidgetBase44) {
  _inherits(ejRte, _WidgetBase44);

  function ejRte(element) {
    _classCallCheck(this, _ejRte);

    _WidgetBase44.call(this);
    this.element = element;
  }

  var _ejRte = ejRte;
  ejRte = _aureliaDependencyInjection.inject(Element)(ejRte) || ejRte;
  ejRte = generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], { 'enableRTL': 'enableRtl' })(ejRte) || ejRte;
  ejRte = _aureliaTemplating.customAttribute(constants.attributePrefix + 'rte')(ejRte) || ejRte;
  return ejRte;
})(WidgetBase);

exports.ejRte = ejRte;

var ejSchedule = (function (_WidgetBase45) {
  var _instanceInitializers11 = {};

  _inherits(ejSchedule, _WidgetBase45);

  _createDecoratedClass(ejSchedule, [{
    key: 'resources',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'schedule-resource')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers11);

  function ejSchedule(element) {
    _classCallCheck(this, _ejSchedule);

    _WidgetBase45.call(this);

    _defineDecoratedPropertyDescriptor(this, 'resources', _instanceInitializers11);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'resources';
  }

  var _ejSchedule = ejSchedule;
  ejSchedule = _aureliaDependencyInjection.inject(Element)(ejSchedule) || ejSchedule;
  ejSchedule = generateBindables('ejSchedule', ['allowDragAndDrop', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth'], ['currentView', 'currentDate'], { 'enableRTL': 'enableRtl' })(ejSchedule) || ejSchedule;
  ejSchedule = _aureliaTemplating.inlineView('<template><content></content></template>')(ejSchedule) || ejSchedule;
  ejSchedule = _aureliaTemplating.customElement(constants.elementPrefix + 'schedule')(ejSchedule) || ejSchedule;
  return ejSchedule;
})(WidgetBase);

exports.ejSchedule = ejSchedule;

var ScheduleResource = (function () {
  function ScheduleResource() {
    _classCallCheck(this, _ScheduleResource);
  }

  var _ScheduleResource = ScheduleResource;
  ScheduleResource = generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])(ScheduleResource) || ScheduleResource;
  ScheduleResource = _aureliaTemplating.customElement(constants.elementPrefix + 'schedule-resource')(ScheduleResource) || ScheduleResource;
  ScheduleResource = _aureliaTemplating.inlineView('<template><content></content></template>')(ScheduleResource) || ScheduleResource;
  return ScheduleResource;
})();

exports.ScheduleResource = ScheduleResource;

var ejScroller = (function (_WidgetBase46) {
  _inherits(ejScroller, _WidgetBase46);

  function ejScroller(element) {
    _classCallCheck(this, _ejScroller);

    _WidgetBase46.call(this);
    this.element = element;
  }

  var _ejScroller = ejScroller;
  ejScroller = _aureliaDependencyInjection.inject(Element)(ejScroller) || ejScroller;
  ejScroller = generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': 'enableRtl' })(ejScroller) || ejScroller;
  ejScroller = _aureliaTemplating.customAttribute(constants.attributePrefix + 'scroller')(ejScroller) || ejScroller;
  return ejScroller;
})(WidgetBase);

exports.ejScroller = ejScroller;

var ejSlider = (function (_WidgetBase47) {
  _inherits(ejSlider, _WidgetBase47);

  function ejSlider(element) {
    _classCallCheck(this, _ejSlider);

    _WidgetBase47.call(this);
    this.element = element;
  }

  var _ejSlider = ejSlider;
  ejSlider = _aureliaDependencyInjection.inject(Element)(ejSlider) || ejSlider;
  ejSlider = generateBindables('ejSlider', ['animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejSlider) || ejSlider;
  ejSlider = _aureliaTemplating.customAttribute(constants.attributePrefix + 'slider')(ejSlider) || ejSlider;
  return ejSlider;
})(WidgetBase);

exports.ejSlider = ejSlider;

var ejSplitButton = (function (_WidgetBase48) {
  _inherits(ejSplitButton, _WidgetBase48);

  function ejSplitButton(element) {
    _classCallCheck(this, _ejSplitButton);

    _WidgetBase48.call(this);
    this.element = element;
  }

  var _ejSplitButton = ejSplitButton;
  ejSplitButton = _aureliaDependencyInjection.inject(Element)(ejSplitButton) || ejSplitButton;
  ejSplitButton = generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'text', 'width'], [], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' })(ejSplitButton) || ejSplitButton;
  ejSplitButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'split-button')(ejSplitButton) || ejSplitButton;
  return ejSplitButton;
})(WidgetBase);

exports.ejSplitButton = ejSplitButton;

var ejSplitter = (function (_WidgetBase49) {
  _inherits(ejSplitter, _WidgetBase49);

  function ejSplitter(element) {
    _classCallCheck(this, _ejSplitter);

    _WidgetBase49.call(this);
    this.element = element;
  }

  var _ejSplitter = ejSplitter;
  ejSplitter = _aureliaDependencyInjection.inject(Element)(ejSplitter) || ejSplitter;
  ejSplitter = generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': 'enableRtl' })(ejSplitter) || ejSplitter;
  ejSplitter = _aureliaTemplating.inlineView('<template><content></content></template>')(ejSplitter) || ejSplitter;
  ejSplitter = _aureliaTemplating.customElement(constants.elementPrefix + 'splitter')(ejSplitter) || ejSplitter;
  return ejSplitter;
})(WidgetBase);

exports.ejSplitter = ejSplitter;

var Sheet = (function () {
  function Sheet() {
    _classCallCheck(this, _Sheet);
  }

  var _Sheet = Sheet;
  Sheet = generateBindables('sheets', ['colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'])(Sheet) || Sheet;
  Sheet = _aureliaTemplating.customElement(constants.elementPrefix + 'sheet')(Sheet) || Sheet;
  Sheet = _aureliaTemplating.inlineView('<template><content></content></template>')(Sheet) || Sheet;
  return Sheet;
})();

exports.Sheet = Sheet;

var ejSpreadsheet = (function (_WidgetBase50) {
  var _instanceInitializers12 = {};

  _inherits(ejSpreadsheet, _WidgetBase50);

  _createDecoratedClass(ejSpreadsheet, [{
    key: 'sheets',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'sheet')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers12);

  function ejSpreadsheet(element) {
    _classCallCheck(this, _ejSpreadsheet);

    _WidgetBase50.call(this);

    _defineDecoratedPropertyDescriptor(this, 'sheets', _instanceInitializers12);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'sheets';
  }

  var _ejSpreadsheet = ejSpreadsheet;
  ejSpreadsheet = _aureliaDependencyInjection.inject(Element)(ejSpreadsheet) || ejSpreadsheet;
  ejSpreadsheet = generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'exportSettings', 'formatSettings', 'importOnLoad', 'importSettings', 'locale', 'pictureSettings', 'printSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showRibbon', 'undoRedoStep', 'userName'])(ejSpreadsheet) || ejSpreadsheet;
  ejSpreadsheet = _aureliaTemplating.inlineView('<template><content></content></template>')(ejSpreadsheet) || ejSpreadsheet;
  ejSpreadsheet = _aureliaTemplating.customElement(constants.elementPrefix + 'spreadsheet')(ejSpreadsheet) || ejSpreadsheet;
  return ejSpreadsheet;
})(WidgetBase);

exports.ejSpreadsheet = ejSpreadsheet;

var ejSymbolPalette = (function (_WidgetBase51) {
  _inherits(ejSymbolPalette, _WidgetBase51);

  function ejSymbolPalette(element) {
    _classCallCheck(this, _ejSymbolPalette);

    _WidgetBase51.call(this);
    this.element = element;
  }

  var _ejSymbolPalette = ejSymbolPalette;
  ejSymbolPalette = _aureliaDependencyInjection.inject(Element)(ejSymbolPalette) || ejSymbolPalette;
  ejSymbolPalette = generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width'])(ejSymbolPalette) || ejSymbolPalette;
  ejSymbolPalette = _aureliaTemplating.inlineView('<template><content></content></template>')(ejSymbolPalette) || ejSymbolPalette;
  ejSymbolPalette = _aureliaTemplating.customElement(constants.elementPrefix + 'symbol-palette')(ejSymbolPalette) || ejSymbolPalette;
  return ejSymbolPalette;
})(WidgetBase);

exports.ejSymbolPalette = ejSymbolPalette;

var ejTab = (function (_WidgetBase52) {
  _inherits(ejTab, _WidgetBase52);

  function ejTab(element) {
    _classCallCheck(this, _ejTab);

    _WidgetBase52.call(this);
    this.element = element;
  }

  var _ejTab = ejTab;
  ejTab = _aureliaDependencyInjection.inject(Element)(ejTab) || ejTab;
  ejTab = generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': 'enableRtl' })(ejTab) || ejTab;
  ejTab = _aureliaTemplating.inlineView('<template><content></content></template>')(ejTab) || ejTab;
  ejTab = _aureliaTemplating.customElement(constants.elementPrefix + 'tab')(ejTab) || ejTab;
  return ejTab;
})(WidgetBase);

exports.ejTab = ejTab;

var ejTagCloud = (function (_WidgetBase53) {
  _inherits(ejTagCloud, _WidgetBase53);

  function ejTagCloud(element) {
    _classCallCheck(this, _ejTagCloud);

    _WidgetBase53.call(this);
    this.element = element;
  }

  var _ejTagCloud = ejTagCloud;
  ejTagCloud = _aureliaDependencyInjection.inject(Element)(ejTagCloud) || ejTagCloud;
  ejTagCloud = generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': 'enableRtl' })(ejTagCloud) || ejTagCloud;
  ejTagCloud = _aureliaTemplating.inlineView('<template><content></content></template>')(ejTagCloud) || ejTagCloud;
  ejTagCloud = _aureliaTemplating.customElement(constants.elementPrefix + 'tag-cloud')(ejTagCloud) || ejTagCloud;
  return ejTagCloud;
})(WidgetBase);

exports.ejTagCloud = ejTagCloud;

var ejTile = (function (_WidgetBase54) {
  _inherits(ejTile, _WidgetBase54);

  function ejTile(element) {
    _classCallCheck(this, _ejTile);

    _WidgetBase54.call(this);
    this.element = element;
  }

  var _ejTile = ejTile;
  ejTile = _aureliaDependencyInjection.inject(Element)(ejTile) || ejTile;
  ejTile = generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])(ejTile) || ejTile;
  ejTile = _aureliaTemplating.inlineView('<template><content></content></template>')(ejTile) || ejTile;
  ejTile = _aureliaTemplating.customElement(constants.elementPrefix + 'tile')(ejTile) || ejTile;
  return ejTile;
})(WidgetBase);

exports.ejTile = ejTile;

var ejTimePicker = (function (_WidgetBase55) {
  _inherits(ejTimePicker, _WidgetBase55);

  function ejTimePicker(element) {
    _classCallCheck(this, _ejTimePicker);

    _WidgetBase55.call(this);
    this.isEditor = true;
    this.element = element;
  }

  var _ejTimePicker = ejTimePicker;
  ejTimePicker = _aureliaDependencyInjection.inject(Element)(ejTimePicker) || ejTimePicker;
  ejTimePicker = generateBindables('ejTimePicker', ['cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' })(ejTimePicker) || ejTimePicker;
  ejTimePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'time-picker')(ejTimePicker) || ejTimePicker;
  return ejTimePicker;
})(WidgetBase);

exports.ejTimePicker = ejTimePicker;

var ejToggleButton = (function (_WidgetBase56) {
  _inherits(ejToggleButton, _WidgetBase56);

  function ejToggleButton(element) {
    _classCallCheck(this, _ejToggleButton);

    _WidgetBase56.call(this);
    this.element = element;
  }

  var _ejToggleButton = ejToggleButton;
  ejToggleButton = _aureliaDependencyInjection.inject(Element)(ejToggleButton) || ejToggleButton;
  ejToggleButton = generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], { 'enableRTL': 'enableRtl' })(ejToggleButton) || ejToggleButton;
  ejToggleButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'toggle-button')(ejToggleButton) || ejToggleButton;
  return ejToggleButton;
})(WidgetBase);

exports.ejToggleButton = ejToggleButton;

var ejToolbar = (function (_WidgetBase57) {
  _inherits(ejToolbar, _WidgetBase57);

  function ejToolbar(element) {
    _classCallCheck(this, _ejToolbar);

    _WidgetBase57.call(this);
    this.element = element;
  }

  var _ejToolbar = ejToolbar;
  ejToolbar = _aureliaDependencyInjection.inject(Element)(ejToolbar) || ejToolbar;
  ejToolbar = generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'width'], [], { 'enableRTL': 'enableRtl' })(ejToolbar) || ejToolbar;
  ejToolbar = _aureliaTemplating.customAttribute(constants.attributePrefix + 'toolbar')(ejToolbar) || ejToolbar;
  return ejToolbar;
})(WidgetBase);

exports.ejToolbar = ejToolbar;

var ejTooltip = (function (_WidgetBase58) {
  _inherits(ejTooltip, _WidgetBase58);

  function ejTooltip(element) {
    _classCallCheck(this, _ejTooltip);

    _WidgetBase58.call(this);
    this.element = element;
  }

  var _ejTooltip = ejTooltip;
  ejTooltip = _aureliaDependencyInjection.inject(Element)(ejTooltip) || ejTooltip;
  ejTooltip = generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'target', 'title', 'trigger', 'width'], [], { 'enableRTL': 'enableRtl' })(ejTooltip) || ejTooltip;
  ejTooltip = _aureliaTemplating.customAttribute(constants.attributePrefix + 'tooltip')(ejTooltip) || ejTooltip;
  return ejTooltip;
})(WidgetBase);

exports.ejTooltip = ejTooltip;

var ejTreeGrid = (function (_WidgetBase59) {
  var _instanceInitializers13 = {};

  _inherits(ejTreeGrid, _WidgetBase59);

  _createDecoratedClass(ejTreeGrid, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'tree-grid-column')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers13);

  function ejTreeGrid(element, templateEngine) {
    _classCallCheck(this, _ejTreeGrid);

    _WidgetBase59.call(this);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers13);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  var _ejTreeGrid = ejTreeGrid;
  ejTreeGrid = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.TemplatingEngine)(ejTreeGrid) || ejTreeGrid;
  ejTreeGrid = generateBindables('ejTreeGrid', ['allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'altRowTemplateID', 'childMapping', 'columns', 'contextMenuSettings', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'filterBarMode', 'idMapping', 'parentIdMapping', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectionType', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex'], { 'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId' })(ejTreeGrid) || ejTreeGrid;
  ejTreeGrid = _aureliaTemplating.inlineView('<template><content></content></template>')(ejTreeGrid) || ejTreeGrid;
  ejTreeGrid = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-grid')(ejTreeGrid) || ejTreeGrid;
  return ejTreeGrid;
})(WidgetBase);

exports.ejTreeGrid = ejTreeGrid;

var TreeGridColumn = (function () {
  var _instanceInitializers14 = {};

  function TreeGridColumn() {
    _classCallCheck(this, _TreeGridColumn);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers14);
  }

  TreeGridColumn.prototype.bind = function bind() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  _createDecoratedClass(TreeGridColumn, [{
    key: 'template',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers14);

  var _TreeGridColumn = TreeGridColumn;
  TreeGridColumn = generateBindables('columns', ['allowFiltering', 'allowSorting', 'editType', 'field', 'filterEditType', 'headerText', 'visible', 'headerTemplateID', 'isFrozen', 'allowFreezing'])(TreeGridColumn) || TreeGridColumn;
  TreeGridColumn = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-grid-column')(TreeGridColumn) || TreeGridColumn;
  TreeGridColumn = _aureliaTemplating.inlineView('<template><content></content></template>')(TreeGridColumn) || TreeGridColumn;
  return TreeGridColumn;
})();

exports.TreeGridColumn = TreeGridColumn;

var Level = (function () {
  function Level() {
    _classCallCheck(this, _Level);
  }

  var _Level = Level;
  Level = generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels'])(Level) || Level;
  Level = _aureliaTemplating.customElement(constants.elementPrefix + 'level')(Level) || Level;
  Level = _aureliaTemplating.inlineView('<template><content></content></template>')(Level) || Level;
  return Level;
})();

exports.Level = Level;

var ejTreeMap = (function (_WidgetBase60) {
  var _instanceInitializers15 = {};

  _inherits(ejTreeMap, _WidgetBase60);

  _createDecoratedClass(ejTreeMap, [{
    key: 'levels',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'level')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers15);

  function ejTreeMap(element) {
    _classCallCheck(this, _ejTreeMap);

    _WidgetBase60.call(this);

    _defineDecoratedPropertyDescriptor(this, 'levels', _instanceInitializers15);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'levels';
  }

  var _ejTreeMap = ejTreeMap;
  ejTreeMap = _aureliaDependencyInjection.inject(Element)(ejTreeMap) || ejTreeMap;
  ejTreeMap = generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'enableDrillDown', 'enableResize', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'leafItemSettings', 'rangeColorMapping', 'groupSelectionMode', 'showLegend', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath'])(ejTreeMap) || ejTreeMap;
  ejTreeMap = _aureliaTemplating.inlineView('<template><content></content></template>')(ejTreeMap) || ejTreeMap;
  ejTreeMap = _aureliaTemplating.customElement(constants.elementPrefix + 'tree-map')(ejTreeMap) || ejTreeMap;
  return ejTreeMap;
})(WidgetBase);

exports.ejTreeMap = ejTreeMap;

var ejTreeView = (function (_WidgetBase61) {
  _inherits(ejTreeView, _WidgetBase61);

  function ejTreeView(element) {
    _classCallCheck(this, _ejTreeView);

    _WidgetBase61.call(this);
    this.element = element;
  }

  var _ejTreeView = ejTreeView;
  ejTreeView = _aureliaDependencyInjection.inject(Element)(ejTreeView) || ejTreeView;
  ejTreeView = generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': 'enableRtl' })(ejTreeView) || ejTreeView;
  ejTreeView = _aureliaTemplating.customAttribute(constants.attributePrefix + 'tree-view')(ejTreeView) || ejTreeView;
  return ejTreeView;
})(WidgetBase);

exports.ejTreeView = ejTreeView;

var ejUploadbox = (function (_WidgetBase62) {
  _inherits(ejUploadbox, _WidgetBase62);

  function ejUploadbox(element) {
    _classCallCheck(this, _ejUploadbox);

    _WidgetBase62.call(this);
    this.element = element;
  }

  var _ejUploadbox = ejUploadbox;
  ejUploadbox = _aureliaDependencyInjection.inject(Element)(ejUploadbox) || ejUploadbox;
  ejUploadbox = generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'uploadName', 'width'], [], { 'enableRTL': 'enableRtl' })(ejUploadbox) || ejUploadbox;
  ejUploadbox = _aureliaTemplating.inlineView('<template><content></content></template>')(ejUploadbox) || ejUploadbox;
  ejUploadbox = _aureliaTemplating.customElement(constants.elementPrefix + 'uploadbox')(ejUploadbox) || ejUploadbox;
  return ejUploadbox;
})(WidgetBase);

exports.ejUploadbox = ejUploadbox;

var ejWaitingPopup = (function (_WidgetBase63) {
  _inherits(ejWaitingPopup, _WidgetBase63);

  function ejWaitingPopup(element) {
    _classCallCheck(this, _ejWaitingPopup);

    _WidgetBase63.call(this);
    this.element = element;
  }

  var _ejWaitingPopup = ejWaitingPopup;
  ejWaitingPopup = _aureliaDependencyInjection.inject(Element)(ejWaitingPopup) || ejWaitingPopup;
  ejWaitingPopup = generateBindables('ejWaitingPopup', ['cssClass', 'showImage', 'showOnInit', 'template', 'text'])(ejWaitingPopup) || ejWaitingPopup;
  ejWaitingPopup = _aureliaTemplating.customAttribute(constants.attributePrefix + 'waiting-popup')(ejWaitingPopup) || ejWaitingPopup;
  return ejWaitingPopup;
})(WidgetBase);

exports.ejWaitingPopup = ejWaitingPopup;