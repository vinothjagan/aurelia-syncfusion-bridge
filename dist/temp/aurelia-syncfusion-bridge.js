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

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaTaskQueue = require('aurelia-task-queue');

require('ej.accordion.min');

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

require('ej.dialog.min');

require('datavisualization/ej.digitalgauge.min');

require('ej.dropdownlist.min');

require('ej.fileexplorer.min');

require('ej.gantt.min');

require('ej.grid.min');

require('ej.kanban.min');

require('datavisualization/ej.lineargauge.min');

require('ej.listbox.min');

require('ej.listview.min');

require('ej.maskedit.min');

require('ej.menu.min');

require('ej.editor.min');

require('ej.pdfviewer.min');

require('ej.editor.min');

require('ej.progressbar.min');

require('ej.radiobutton.min');

require('ej.radialmenu.min');

require('ej.rating.min');

require('ej.ribbon.min');

require('ej.rotator.min');

require('ej.rte.min');

require('common/ej.scroller.min');

require('ej.slider.min');

require('ej.splitter.min');

require('ej.tab.min');

require('ej.tagcloud.min');

require('ej.tile.min');

require('ej.timepicker.min');

require('ej.togglebutton.min');

require('ej.toolbar.min');

require('ej.treeview.min');

var EjConfigBuilder = (function () {
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
  ejAccordion = generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'])(ejAccordion) || ejAccordion;
  ejAccordion = _aureliaFramework.inlineView('<template><content></content></template>')(ejAccordion) || ejAccordion;
  ejAccordion = _aureliaTemplating.customElement(constants.elementPrefix + 'accordion')(ejAccordion) || ejAccordion;
  return ejAccordion;
})(WidgetBase);

exports.ejAccordion = ejAccordion;

var ejBarcode = (function (_WidgetBase2) {
  _inherits(ejBarcode, _WidgetBase2);

  function ejBarcode(element) {
    _classCallCheck(this, _ejBarcode);

    _WidgetBase2.call(this);
    this.element = element;
  }

  var _ejBarcode = ejBarcode;
  ejBarcode = _aureliaDependencyInjection.inject(Element)(ejBarcode) || ejBarcode;
  ejBarcode = generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])(ejBarcode) || ejBarcode;
  ejBarcode = _aureliaFramework.inlineView('<template><content></content></template>')(ejBarcode) || ejBarcode;
  ejBarcode = _aureliaTemplating.customElement(constants.elementPrefix + 'barcode')(ejBarcode) || ejBarcode;
  return ejBarcode;
})(WidgetBase);

exports.ejBarcode = ejBarcode;

var ejBulletGraph = (function (_WidgetBase3) {
  var _instanceInitializers = {};

  _inherits(ejBulletGraph, _WidgetBase3);

  _createDecoratedClass(ejBulletGraph, [{
    key: 'qualitativeRanges',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'qualitativeRange')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function ejBulletGraph(element) {
    _classCallCheck(this, _ejBulletGraph);

    _WidgetBase3.call(this);

    _defineDecoratedPropertyDescriptor(this, 'qualitativeRanges', _instanceInitializers);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'qualitativeRanges';
  }

  var _ejBulletGraph = ejBulletGraph;
  ejBulletGraph = _aureliaDependencyInjection.inject(Element)(ejBulletGraph) || ejBulletGraph;
  ejBulletGraph = generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'flowDirection', 'height', 'isResponsive', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width'])(ejBulletGraph) || ejBulletGraph;
  ejBulletGraph = _aureliaFramework.inlineView('<template><content></content></template>')(ejBulletGraph) || ejBulletGraph;
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
  QualitativeRange = _aureliaFramework.inlineView('<template><content></content></template>')(QualitativeRange) || QualitativeRange;
  return QualitativeRange;
})();

exports.QualitativeRange = QualitativeRange;

var ejButton = (function (_WidgetBase4) {
  _inherits(ejButton, _WidgetBase4);

  function ejButton(element) {
    _classCallCheck(this, _ejButton);

    _WidgetBase4.call(this);
    this.element = element;
  }

  var _ejButton = ejButton;
  ejButton = _aureliaDependencyInjection.inject(Element)(ejButton) || ejButton;
  ejButton = generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'])(ejButton) || ejButton;
  ejButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'button')(ejButton) || ejButton;
  return ejButton;
})(WidgetBase);

exports.ejButton = ejButton;

var ejChart = (function (_WidgetBase5) {
  var _instanceInitializers2 = {};

  _inherits(ejChart, _WidgetBase5);

  _createDecoratedClass(ejChart, [{
    key: 'series',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'series')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers2);

  function ejChart(element) {
    _classCallCheck(this, _ejChart);

    _WidgetBase5.call(this);

    _defineDecoratedPropertyDescriptor(this, 'series', _instanceInitializers2);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'series';
  }

  var _ejChart = ejChart;
  ejChart = _aureliaDependencyInjection.inject(Element)(ejChart) || ejChart;
  ejChart = generateBindables('ejChart', ['annotations', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'Margin', 'perspectiveAngle', 'primaryXAxis', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming'])(ejChart) || ejChart;
  ejChart = _aureliaFramework.inlineView('<template><content></content></template>')(ejChart) || ejChart;
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
  Series = _aureliaFramework.inlineView('<template><content></content></template>')(Series) || Series;
  return Series;
})();

exports.Series = Series;

var ejCheckBox = (function (_WidgetBase6) {
  _inherits(ejCheckBox, _WidgetBase6);

  function ejCheckBox(element) {
    _classCallCheck(this, _ejCheckBox);

    _WidgetBase6.call(this);
    this.element = element;
  }

  var _ejCheckBox = ejCheckBox;
  ejCheckBox = _aureliaDependencyInjection.inject(Element)(ejCheckBox) || ejCheckBox;
  ejCheckBox = generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'])(ejCheckBox) || ejCheckBox;
  ejCheckBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'check-box')(ejCheckBox) || ejCheckBox;
  return ejCheckBox;
})(WidgetBase);

exports.ejCheckBox = ejCheckBox;

var ejCircularGauge = (function (_WidgetBase7) {
  _inherits(ejCircularGauge, _WidgetBase7);

  function ejCircularGauge(element) {
    _classCallCheck(this, _ejCircularGauge);

    _WidgetBase7.call(this);
    this.element = element;
  }

  var _ejCircularGauge = ejCircularGauge;
  ejCircularGauge = _aureliaDependencyInjection.inject(Element)(ejCircularGauge) || ejCircularGauge;
  ejCircularGauge = generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejCircularGauge) || ejCircularGauge;
  ejCircularGauge = _aureliaFramework.inlineView('<template><content></content></template>')(ejCircularGauge) || ejCircularGauge;
  ejCircularGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'circular-gauge')(ejCircularGauge) || ejCircularGauge;
  return ejCircularGauge;
})(WidgetBase);

exports.ejCircularGauge = ejCircularGauge;

var ejColorPicker = (function (_WidgetBase8) {
  _inherits(ejColorPicker, _WidgetBase8);

  function ejColorPicker(element) {
    _classCallCheck(this, _ejColorPicker);

    _WidgetBase8.call(this);
    this.element = element;
  }

  var _ejColorPicker = ejColorPicker;
  ejColorPicker = _aureliaDependencyInjection.inject(Element)(ejColorPicker) || ejColorPicker;
  ejColorPicker = generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value'])(ejColorPicker) || ejColorPicker;
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
exports.inlineView = _aureliaFramework.inlineView;
exports.customElement = _aureliaTemplating.customElement;
exports.children = _aureliaTemplating.children;
exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
exports.TemplateProcessor = TemplateProcessor;
exports.Util = Util;
var constants = {
  eventPrefix: 'ej-on-',
  bindablePrefix: 'ej-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-'
};

exports.constants = constants;

function generateBindables(controlName, inputs, twoWayProperties) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(Util);
    inputs.push('options');
    var len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (var i = 0; i < len; i++) {
        var option = inputs[i];
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

      var value = model[this.getBindablePropertyName(prop)];
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
    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions) {
      this.createTwoWays();
    }
    this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
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

var ejCurrencyTextbox = (function (_WidgetBase9) {
  _inherits(ejCurrencyTextbox, _WidgetBase9);

  function ejCurrencyTextbox(element) {
    _classCallCheck(this, _ejCurrencyTextbox);

    _WidgetBase9.call(this);
    this.element = element;
  }

  var _ejCurrencyTextbox = ejCurrencyTextbox;
  ejCurrencyTextbox = _aureliaDependencyInjection.inject(Element)(ejCurrencyTextbox) || ejCurrencyTextbox;
  ejCurrencyTextbox = generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'])(ejCurrencyTextbox) || ejCurrencyTextbox;
  ejCurrencyTextbox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'currency-textbox')(ejCurrencyTextbox) || ejCurrencyTextbox;
  return ejCurrencyTextbox;
})(WidgetBase);

exports.ejCurrencyTextbox = ejCurrencyTextbox;

var ejDatePicker = (function (_WidgetBase10) {
  _inherits(ejDatePicker, _WidgetBase10);

  function ejDatePicker(element) {
    _classCallCheck(this, _ejDatePicker);

    _WidgetBase10.call(this);
    this.element = element;
  }

  var _ejDatePicker = ejDatePicker;
  ejDatePicker = _aureliaDependencyInjection.inject(Element)(ejDatePicker) || ejDatePicker;
  ejDatePicker = generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])(ejDatePicker) || ejDatePicker;
  ejDatePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'date-picker')(ejDatePicker) || ejDatePicker;
  return ejDatePicker;
})(WidgetBase);

exports.ejDatePicker = ejDatePicker;

var ejDateTimePicker = (function (_WidgetBase11) {
  _inherits(ejDateTimePicker, _WidgetBase11);

  function ejDateTimePicker(element) {
    _classCallCheck(this, _ejDateTimePicker);

    _WidgetBase11.call(this);
    this.element = element;
  }

  var _ejDateTimePicker = ejDateTimePicker;
  ejDateTimePicker = _aureliaDependencyInjection.inject(Element)(ejDateTimePicker) || ejDateTimePicker;
  ejDateTimePicker = generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'width'], ['value'])(ejDateTimePicker) || ejDateTimePicker;
  ejDateTimePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'date-time-picker')(ejDateTimePicker) || ejDateTimePicker;
  return ejDateTimePicker;
})(WidgetBase);

exports.ejDateTimePicker = ejDateTimePicker;

var ejDialog = (function (_WidgetBase12) {
  _inherits(ejDialog, _WidgetBase12);

  function ejDialog(element) {
    _classCallCheck(this, _ejDialog);

    _WidgetBase12.call(this);
    this.element = element;
  }

  var _ejDialog = ejDialog;
  ejDialog = _aureliaDependencyInjection.inject(Element)(ejDialog) || ejDialog;
  ejDialog = generateBindables('ejDialog', ['actionButtons', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'closeIconTooltip', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex'])(ejDialog) || ejDialog;
  ejDialog = _aureliaFramework.inlineView('<template><content></content></template>')(ejDialog) || ejDialog;
  ejDialog = _aureliaTemplating.customElement(constants.elementPrefix + 'dialog')(ejDialog) || ejDialog;
  return ejDialog;
})(WidgetBase);

exports.ejDialog = ejDialog;

var ejDigitalGauge = (function (_WidgetBase13) {
  _inherits(ejDigitalGauge, _WidgetBase13);

  function ejDigitalGauge(element) {
    _classCallCheck(this, _ejDigitalGauge);

    _WidgetBase13.call(this);
    this.element = element;
  }

  var _ejDigitalGauge = ejDigitalGauge;
  ejDigitalGauge = _aureliaDependencyInjection.inject(Element)(ejDigitalGauge) || ejDigitalGauge;
  ejDigitalGauge = generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])(ejDigitalGauge) || ejDigitalGauge;
  ejDigitalGauge = _aureliaFramework.inlineView('<template><content></content></template>')(ejDigitalGauge) || ejDigitalGauge;
  ejDigitalGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'digital-gauge')(ejDigitalGauge) || ejDigitalGauge;
  return ejDigitalGauge;
})(WidgetBase);

exports.ejDigitalGauge = ejDigitalGauge;

var ejDropDownList = (function (_WidgetBase14) {
  _inherits(ejDropDownList, _WidgetBase14);

  function ejDropDownList(element) {
    _classCallCheck(this, _ejDropDownList);

    _WidgetBase14.call(this);
    this.element = element;
  }

  var _ejDropDownList = ejDropDownList;
  ejDropDownList = _aureliaDependencyInjection.inject(Element)(ejDropDownList) || ejDropDownList;
  ejDropDownList = generateBindables('ejDropDownList', ['cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'])(ejDropDownList) || ejDropDownList;
  ejDropDownList = _aureliaTemplating.customAttribute(constants.attributePrefix + 'drop-down-list')(ejDropDownList) || ejDropDownList;
  return ejDropDownList;
})(WidgetBase);

exports.ejDropDownList = ejDropDownList;

var ejFileExplorer = (function (_WidgetBase15) {
  _inherits(ejFileExplorer, _WidgetBase15);

  function ejFileExplorer(element) {
    _classCallCheck(this, _ejFileExplorer);

    _WidgetBase15.call(this);
    this.element = element;
  }

  var _ejFileExplorer = ejFileExplorer;
  ejFileExplorer = _aureliaDependencyInjection.inject(Element)(ejFileExplorer) || ejFileExplorer;
  ejFileExplorer = generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems', 'showContextMenu', 'showFooter', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'])(ejFileExplorer) || ejFileExplorer;
  ejFileExplorer = _aureliaFramework.inlineView('<template><content></content></template>')(ejFileExplorer) || ejFileExplorer;
  ejFileExplorer = _aureliaTemplating.customElement(constants.elementPrefix + 'file-explorer')(ejFileExplorer) || ejFileExplorer;
  return ejFileExplorer;
})(WidgetBase);

exports.ejFileExplorer = ejFileExplorer;

var ejGantt = (function (_WidgetBase16) {
  _inherits(ejGantt, _WidgetBase16);

  function ejGantt(element) {
    _classCallCheck(this, _ejGantt);

    _WidgetBase16.call(this);
    this.element = element;
  }

  var _ejGantt = ejGantt;
  ejGantt = _aureliaDependencyInjection.inject(Element)(ejGantt) || ejGantt;
  ejGantt = generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'enablePredecessorValidation', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'childMapping', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'durationMapping', 'durationUnit', 'editDialogFields', 'splitterSettings', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu', 'enableProgressBarResizing', 'enableResize', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'endDateMapping', 'highlightWeekends', 'holidays', 'includeWeekend', 'locale', 'milestoneMapping', 'parentProgressbarBackground', 'parentTaskbarBackground', 'parentTaskIdMapping', 'predecessorMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'progressMapping', 'query', 'renderBaseline', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resources', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedItem', 'selectedRowIndex', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'sortSettings', 'splitterPosition', 'startDateMapping', 'stripLines', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId', 'taskIdMapping', 'taskNameMapping', 'toolbarSettings', 'treeColumnIndex', 'weekendBackground', 'workingTimeScale'], ['dataSource', 'selectedRowIndex'])(ejGantt) || ejGantt;
  ejGantt = _aureliaFramework.inlineView('<template><content></content></template>')(ejGantt) || ejGantt;
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
  Column = generateBindables('columns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'showInColumnChooser', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate', 'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'isUnbound', 'template', 'templateID', 'textAlign', 'tooltip', 'clipMode', 'type', 'validationRules', 'visible', 'width'])(Column) || Column;
  Column = _aureliaTemplating.customElement(constants.elementPrefix + 'column')(Column) || Column;
  Column = _aureliaFramework.inlineView('<template><content></content></template>')(Column) || Column;
  return Column;
})();

exports.Column = Column;

var ejGrid = (function (_WidgetBase17) {
  var _instanceInitializers5 = {};

  _inherits(ejGrid, _WidgetBase17);

  _createDecoratedClass(ejGrid, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'column')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers5);

  function ejGrid(element, templateEngine) {
    _classCallCheck(this, _ejGrid);

    _WidgetBase17.call(this);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers5);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  var _ejGrid = ejGrid;
  ejGrid = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.TemplatingEngine)(ejGrid) || ejGrid;
  ejGrid = generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'filterSettings', 'groupSettings', 'textWrapSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'scrollSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'showAddNewRow', 'showColumnChooser', 'showInColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings'], ['dataSource'])(ejGrid) || ejGrid;
  ejGrid = _aureliaFramework.inlineView('<template><content></content></template>')(ejGrid) || ejGrid;
  ejGrid = _aureliaTemplating.customElement(constants.elementPrefix + 'grid')(ejGrid) || ejGrid;
  return ejGrid;
})(WidgetBase);

exports.ejGrid = ejGrid;

var ejKanban = (function (_WidgetBase18) {
  var _instanceInitializers6 = {};

  _inherits(ejKanban, _WidgetBase18);

  _createDecoratedClass(ejKanban, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'kanbanColumn')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers6);

  function ejKanban(element) {
    _classCallCheck(this, _ejKanban);

    _WidgetBase18.call(this);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers6);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
  }

  var _ejKanban = ejKanban;
  ejKanban = _aureliaDependencyInjection.inject(Element)(ejKanban) || ejKanban;
  ejKanban = generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'contextMenuSettings', 'columns', 'cardSettings', 'cssClass', 'dataSource', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'locale'], ['dataSource'])(ejKanban) || ejKanban;
  ejKanban = _aureliaFramework.inlineView('<template><content></content></template>')(ejKanban) || ejKanban;
  ejKanban = _aureliaTemplating.customElement(constants.elementPrefix + 'kanban')(ejKanban) || ejKanban;
  return ejKanban;
})(WidgetBase);

exports.ejKanban = ejKanban;

var KanbanColumn = (function () {
  function KanbanColumn() {
    _classCallCheck(this, _KanbanColumn);
  }

  var _KanbanColumn = KanbanColumn;
  KanbanColumn = generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible'])(KanbanColumn) || KanbanColumn;
  KanbanColumn = _aureliaTemplating.customElement(constants.elementPrefix + 'kanban-column')(KanbanColumn) || KanbanColumn;
  KanbanColumn = _aureliaFramework.inlineView('<template><content></content></template>')(KanbanColumn) || KanbanColumn;
  return KanbanColumn;
})();

exports.KanbanColumn = KanbanColumn;

var ejLinearGauge = (function (_WidgetBase19) {
  _inherits(ejLinearGauge, _WidgetBase19);

  function ejLinearGauge(element) {
    _classCallCheck(this, _ejLinearGauge);

    _WidgetBase19.call(this);
    this.element = element;
  }

  var _ejLinearGauge = ejLinearGauge;
  ejLinearGauge = _aureliaDependencyInjection.inject(Element)(ejLinearGauge) || ejLinearGauge;
  ejLinearGauge = generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame', 'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])(ejLinearGauge) || ejLinearGauge;
  ejLinearGauge = _aureliaFramework.inlineView('<template><content></content></template>')(ejLinearGauge) || ejLinearGauge;
  ejLinearGauge = _aureliaTemplating.customElement(constants.elementPrefix + 'linear-gauge')(ejLinearGauge) || ejLinearGauge;
  return ejLinearGauge;
})(WidgetBase);

exports.ejLinearGauge = ejLinearGauge;

var ejListBox = (function (_WidgetBase20) {
  _inherits(ejListBox, _WidgetBase20);

  function ejListBox(element) {
    _classCallCheck(this, _ejListBox);

    _WidgetBase20.call(this);
    this.element = element;
  }

  var _ejListBox = ejListBox;
  ejListBox = _aureliaDependencyInjection.inject(Element)(ejListBox) || ejListBox;
  ejListBox = generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value'])(ejListBox) || ejListBox;
  ejListBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'list-box')(ejListBox) || ejListBox;
  return ejListBox;
})(WidgetBase);

exports.ejListBox = ejListBox;

var ejListView = (function (_WidgetBase21) {
  var _instanceInitializers7 = {};

  _inherits(ejListView, _WidgetBase21);

  _createDecoratedClass(ejListView, [{
    key: 'items',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'listViewItem')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers7);

  function ejListView(element) {
    _classCallCheck(this, _ejListView);

    _WidgetBase21.call(this);

    _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers7);

    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'items';
  }

  var _ejListView = ejListView;
  ejListView = _aureliaDependencyInjection.inject(Element)(ejListView) || ejListView;
  ejListView = generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource'])(ejListView) || ejListView;
  ejListView = _aureliaFramework.inlineView('<template><content></content></template>')(ejListView) || ejListView;
  ejListView = _aureliaTemplating.customElement(constants.elementPrefix + 'list-view')(ejListView) || ejListView;
  return ejListView;
})(WidgetBase);

exports.ejListView = ejListView;

var ListViewItem = (function () {
  function ListViewItem() {
    _classCallCheck(this, _ListViewItem);
  }

  var _ListViewItem = ListViewItem;
  ListViewItem = generateBindables('items', [])(ListViewItem) || ListViewItem;
  ListViewItem = _aureliaTemplating.customElement(constants.elementPrefix + 'list-view-item')(ListViewItem) || ListViewItem;
  ListViewItem = _aureliaFramework.inlineView('<template><content></content></template>')(ListViewItem) || ListViewItem;
  return ListViewItem;
})();

exports.ListViewItem = ListViewItem;

var ejMaskEdit = (function (_WidgetBase22) {
  _inherits(ejMaskEdit, _WidgetBase22);

  function ejMaskEdit(element) {
    _classCallCheck(this, _ejMaskEdit);

    _WidgetBase22.call(this);
    this.element = element;
  }

  var _ejMaskEdit = ejMaskEdit;
  ejMaskEdit = _aureliaDependencyInjection.inject(Element)(ejMaskEdit) || ejMaskEdit;
  ejMaskEdit = generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'maskFormat', 'name', 'readOnly', 'showError', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])(ejMaskEdit) || ejMaskEdit;
  ejMaskEdit = _aureliaTemplating.customAttribute(constants.attributePrefix + 'mask-edit')(ejMaskEdit) || ejMaskEdit;
  return ejMaskEdit;
})(WidgetBase);

exports.ejMaskEdit = ejMaskEdit;

var ejMenu = (function (_WidgetBase23) {
  _inherits(ejMenu, _WidgetBase23);

  function ejMenu(element) {
    _classCallCheck(this, _ejMenu);

    _WidgetBase23.call(this);
    this.element = element;
  }

  var _ejMenu = ejMenu;
  ejMenu = _aureliaDependencyInjection.inject(Element)(ejMenu) || ejMenu;
  ejMenu = generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'])(ejMenu) || ejMenu;
  ejMenu = _aureliaTemplating.customAttribute(constants.attributePrefix + 'menu')(ejMenu) || ejMenu;
  return ejMenu;
})(WidgetBase);

exports.ejMenu = ejMenu;

var ejNumericTextbox = (function (_WidgetBase24) {
  _inherits(ejNumericTextbox, _WidgetBase24);

  function ejNumericTextbox(element) {
    _classCallCheck(this, _ejNumericTextbox);

    _WidgetBase24.call(this);
    this.element = element;
  }

  var _ejNumericTextbox = ejNumericTextbox;
  ejNumericTextbox = _aureliaDependencyInjection.inject(Element)(ejNumericTextbox) || ejNumericTextbox;
  ejNumericTextbox = generateBindables('ejNumericTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'])(ejNumericTextbox) || ejNumericTextbox;
  ejNumericTextbox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'numeric-textbox')(ejNumericTextbox) || ejNumericTextbox;
  return ejNumericTextbox;
})(WidgetBase);

exports.ejNumericTextbox = ejNumericTextbox;

var ejPdfViewer = (function (_WidgetBase25) {
  _inherits(ejPdfViewer, _WidgetBase25);

  function ejPdfViewer(element) {
    _classCallCheck(this, _ejPdfViewer);

    _WidgetBase25.call(this);
    this.element = element;
  }

  var _ejPdfViewer = ejPdfViewer;
  ejPdfViewer = _aureliaDependencyInjection.inject(Element)(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService'])(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _aureliaFramework.inlineView('<template><content></content></template>')(ejPdfViewer) || ejPdfViewer;
  ejPdfViewer = _aureliaTemplating.customElement(constants.elementPrefix + 'pdf-viewer')(ejPdfViewer) || ejPdfViewer;
  return ejPdfViewer;
})(WidgetBase);

exports.ejPdfViewer = ejPdfViewer;

var ejPercentageTextbox = (function (_WidgetBase26) {
  _inherits(ejPercentageTextbox, _WidgetBase26);

  function ejPercentageTextbox(element) {
    _classCallCheck(this, _ejPercentageTextbox);

    _WidgetBase26.call(this);
    this.element = element;
  }

  var _ejPercentageTextbox = ejPercentageTextbox;
  ejPercentageTextbox = _aureliaDependencyInjection.inject(Element)(ejPercentageTextbox) || ejPercentageTextbox;
  ejPercentageTextbox = generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'])(ejPercentageTextbox) || ejPercentageTextbox;
  ejPercentageTextbox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'percentage-textbox')(ejPercentageTextbox) || ejPercentageTextbox;
  return ejPercentageTextbox;
})(WidgetBase);

exports.ejPercentageTextbox = ejPercentageTextbox;

var ejProgressBar = (function (_WidgetBase27) {
  _inherits(ejProgressBar, _WidgetBase27);

  function ejProgressBar(element) {
    _classCallCheck(this, _ejProgressBar);

    _WidgetBase27.call(this);
    this.element = element;
  }

  var _ejProgressBar = ejProgressBar;
  ejProgressBar = _aureliaDependencyInjection.inject(Element)(ejProgressBar) || ejProgressBar;
  ejProgressBar = generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'])(ejProgressBar) || ejProgressBar;
  ejProgressBar = _aureliaTemplating.customAttribute(constants.attributePrefix + 'progress-bar')(ejProgressBar) || ejProgressBar;
  return ejProgressBar;
})(WidgetBase);

exports.ejProgressBar = ejProgressBar;

var ejRadioButton = (function (_WidgetBase28) {
  _inherits(ejRadioButton, _WidgetBase28);

  function ejRadioButton(element) {
    _classCallCheck(this, _ejRadioButton);

    _WidgetBase28.call(this);
    this.element = element;
  }

  var _ejRadioButton = ejRadioButton;
  ejRadioButton = _aureliaDependencyInjection.inject(Element)(ejRadioButton) || ejRadioButton;
  ejRadioButton = generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'])(ejRadioButton) || ejRadioButton;
  ejRadioButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'radio-button')(ejRadioButton) || ejRadioButton;
  return ejRadioButton;
})(WidgetBase);

exports.ejRadioButton = ejRadioButton;

var ejRadialMenu = (function (_WidgetBase29) {
  _inherits(ejRadialMenu, _WidgetBase29);

  function ejRadialMenu(element) {
    _classCallCheck(this, _ejRadialMenu);

    _WidgetBase29.call(this);
    this.element = element;
  }

  var _ejRadialMenu = ejRadialMenu;
  ejRadialMenu = _aureliaDependencyInjection.inject(Element)(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'radius', 'targetElementId', 'position'])(ejRadialMenu) || ejRadialMenu;
  ejRadialMenu = _aureliaTemplating.customAttribute(constants.attributePrefix + 'radial-menu')(ejRadialMenu) || ejRadialMenu;
  return ejRadialMenu;
})(WidgetBase);

exports.ejRadialMenu = ejRadialMenu;

var ejRating = (function (_WidgetBase30) {
  _inherits(ejRating, _WidgetBase30);

  function ejRating(element) {
    _classCallCheck(this, _ejRating);

    _WidgetBase30.call(this);
    this.element = element;
  }

  var _ejRating = ejRating;
  ejRating = _aureliaDependencyInjection.inject(Element)(ejRating) || ejRating;
  ejRating = generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value'])(ejRating) || ejRating;
  ejRating = _aureliaTemplating.customAttribute(constants.attributePrefix + 'rating')(ejRating) || ejRating;
  return ejRating;
})(WidgetBase);

exports.ejRating = ejRating;

var ejRibbon = (function (_WidgetBase31) {
  _inherits(ejRibbon, _WidgetBase31);

  function ejRibbon(element) {
    _classCallCheck(this, _ejRibbon);

    _WidgetBase31.call(this);
    this.element = element;
  }

  var _ejRibbon = ejRibbon;
  ejRibbon = _aureliaDependencyInjection.inject(Element)(ejRibbon) || ejRibbon;
  ejRibbon = generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'])(ejRibbon) || ejRibbon;
  ejRibbon = _aureliaFramework.inlineView('<template><content></content></template>')(ejRibbon) || ejRibbon;
  ejRibbon = _aureliaTemplating.customElement(constants.elementPrefix + 'ribbon')(ejRibbon) || ejRibbon;
  return ejRibbon;
})(WidgetBase);

exports.ejRibbon = ejRibbon;

var ejRotator = (function (_WidgetBase32) {
  _inherits(ejRotator, _WidgetBase32);

  function ejRotator(element) {
    _classCallCheck(this, _ejRotator);

    _WidgetBase32.call(this);
    this.element = element;
  }

  var _ejRotator = ejRotator;
  ejRotator = _aureliaDependencyInjection.inject(Element)(ejRotator) || ejRotator;
  ejRotator = generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'thumbnailSourceID'])(ejRotator) || ejRotator;
  ejRotator = _aureliaFramework.inlineView('<template><content></content></template>')(ejRotator) || ejRotator;
  ejRotator = _aureliaTemplating.customElement(constants.elementPrefix + 'rotator')(ejRotator) || ejRotator;
  return ejRotator;
})(WidgetBase);

exports.ejRotator = ejRotator;

var ejRTE = (function (_WidgetBase33) {
  _inherits(ejRTE, _WidgetBase33);

  function ejRTE(element) {
    _classCallCheck(this, _ejRTE);

    _WidgetBase33.call(this);
    this.element = element;
  }

  var _ejRTE = ejRTE;
  ejRTE = _aureliaDependencyInjection.inject(Element)(ejRTE) || ejRTE;
  ejRTE = generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'])(ejRTE) || ejRTE;
  ejRTE = _aureliaTemplating.customAttribute(constants.attributePrefix + 'r-t-e')(ejRTE) || ejRTE;
  return ejRTE;
})(WidgetBase);

exports.ejRTE = ejRTE;

var ejScroller = (function (_WidgetBase34) {
  _inherits(ejScroller, _WidgetBase34);

  function ejScroller(element) {
    _classCallCheck(this, _ejScroller);

    _WidgetBase34.call(this);
    this.element = element;
  }

  var _ejScroller = ejScroller;
  ejScroller = _aureliaDependencyInjection.inject(Element)(ejScroller) || ejScroller;
  ejScroller = generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'])(ejScroller) || ejScroller;
  ejScroller = _aureliaFramework.inlineView('<template><content></content></template>')(ejScroller) || ejScroller;
  ejScroller = _aureliaTemplating.customElement(constants.elementPrefix + 'scroller')(ejScroller) || ejScroller;
  return ejScroller;
})(WidgetBase);

exports.ejScroller = ejScroller;

var ejSlider = (function (_WidgetBase35) {
  _inherits(ejSlider, _WidgetBase35);

  function ejSlider(element) {
    _classCallCheck(this, _ejSlider);

    _WidgetBase35.call(this);
    this.element = element;
  }

  var _ejSlider = ejSlider;
  ejSlider = _aureliaDependencyInjection.inject(Element)(ejSlider) || ejSlider;
  ejSlider = generateBindables('ejSlider', ['animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'])(ejSlider) || ejSlider;
  ejSlider = _aureliaTemplating.customAttribute(constants.attributePrefix + 'slider')(ejSlider) || ejSlider;
  return ejSlider;
})(WidgetBase);

exports.ejSlider = ejSlider;

var ejSplitter = (function (_WidgetBase36) {
  _inherits(ejSplitter, _WidgetBase36);

  function ejSplitter(element) {
    _classCallCheck(this, _ejSplitter);

    _WidgetBase36.call(this);
    this.element = element;
  }

  var _ejSplitter = ejSplitter;
  ejSplitter = _aureliaDependencyInjection.inject(Element)(ejSplitter) || ejSplitter;
  ejSplitter = generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'])(ejSplitter) || ejSplitter;
  ejSplitter = _aureliaFramework.inlineView('<template><content></content></template>')(ejSplitter) || ejSplitter;
  ejSplitter = _aureliaTemplating.customElement(constants.elementPrefix + 'splitter')(ejSplitter) || ejSplitter;
  return ejSplitter;
})(WidgetBase);

exports.ejSplitter = ejSplitter;

var ejTab = (function (_WidgetBase37) {
  _inherits(ejTab, _WidgetBase37);

  function ejTab(element) {
    _classCallCheck(this, _ejTab);

    _WidgetBase37.call(this);
    this.element = element;
  }

  var _ejTab = ejTab;
  ejTab = _aureliaDependencyInjection.inject(Element)(ejTab) || ejTab;
  ejTab = generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'])(ejTab) || ejTab;
  ejTab = _aureliaFramework.inlineView('<template><content></content></template>')(ejTab) || ejTab;
  ejTab = _aureliaTemplating.customElement(constants.elementPrefix + 'tab')(ejTab) || ejTab;
  return ejTab;
})(WidgetBase);

exports.ejTab = ejTab;

var ejTagCloud = (function (_WidgetBase38) {
  _inherits(ejTagCloud, _WidgetBase38);

  function ejTagCloud(element) {
    _classCallCheck(this, _ejTagCloud);

    _WidgetBase38.call(this);
    this.element = element;
  }

  var _ejTagCloud = ejTagCloud;
  ejTagCloud = _aureliaDependencyInjection.inject(Element)(ejTagCloud) || ejTagCloud;
  ejTagCloud = generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'])(ejTagCloud) || ejTagCloud;
  ejTagCloud = _aureliaFramework.inlineView('<template><content></content></template>')(ejTagCloud) || ejTagCloud;
  ejTagCloud = _aureliaTemplating.customElement(constants.elementPrefix + 'tag-cloud')(ejTagCloud) || ejTagCloud;
  return ejTagCloud;
})(WidgetBase);

exports.ejTagCloud = ejTagCloud;

var ejTileView = (function (_WidgetBase39) {
  _inherits(ejTileView, _WidgetBase39);

  function ejTileView(element) {
    _classCallCheck(this, _ejTileView);

    _WidgetBase39.call(this);
    this.element = element;
  }

  var _ejTileView = ejTileView;
  ejTileView = _aureliaDependencyInjection.inject(Element)(ejTileView) || ejTileView;
  ejTileView = generateBindables('ejTileView', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'livetile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])(ejTileView) || ejTileView;
  ejTileView = _aureliaFramework.inlineView('<template><content></content></template>')(ejTileView) || ejTileView;
  ejTileView = _aureliaTemplating.customElement(constants.elementPrefix + 'tile-view')(ejTileView) || ejTileView;
  return ejTileView;
})(WidgetBase);

exports.ejTileView = ejTileView;

var ejTimePicker = (function (_WidgetBase40) {
  _inherits(ejTimePicker, _WidgetBase40);

  function ejTimePicker(element) {
    _classCallCheck(this, _ejTimePicker);

    _WidgetBase40.call(this);
    this.element = element;
  }

  var _ejTimePicker = ejTimePicker;
  ejTimePicker = _aureliaDependencyInjection.inject(Element)(ejTimePicker) || ejTimePicker;
  ejTimePicker = generateBindables('ejTimePicker', ['cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'])(ejTimePicker) || ejTimePicker;
  ejTimePicker = _aureliaTemplating.customAttribute(constants.attributePrefix + 'time-picker')(ejTimePicker) || ejTimePicker;
  return ejTimePicker;
})(WidgetBase);

exports.ejTimePicker = ejTimePicker;

var ejToggleButton = (function (_WidgetBase41) {
  _inherits(ejToggleButton, _WidgetBase41);

  function ejToggleButton(element) {
    _classCallCheck(this, _ejToggleButton);

    _WidgetBase41.call(this);
    this.element = element;
  }

  var _ejToggleButton = ejToggleButton;
  ejToggleButton = _aureliaDependencyInjection.inject(Element)(ejToggleButton) || ejToggleButton;
  ejToggleButton = generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'])(ejToggleButton) || ejToggleButton;
  ejToggleButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'toggle-button')(ejToggleButton) || ejToggleButton;
  return ejToggleButton;
})(WidgetBase);

exports.ejToggleButton = ejToggleButton;

var ejToolbar = (function (_WidgetBase42) {
  _inherits(ejToolbar, _WidgetBase42);

  function ejToolbar(element) {
    _classCallCheck(this, _ejToolbar);

    _WidgetBase42.call(this);
    this.element = element;
  }

  var _ejToolbar = ejToolbar;
  ejToolbar = _aureliaDependencyInjection.inject(Element)(ejToolbar) || ejToolbar;
  ejToolbar = generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'width'])(ejToolbar) || ejToolbar;
  ejToolbar = _aureliaTemplating.customAttribute(constants.attributePrefix + 'toolbar')(ejToolbar) || ejToolbar;
  return ejToolbar;
})(WidgetBase);

exports.ejToolbar = ejToolbar;

var ejTreeView = (function (_WidgetBase43) {
  _inherits(ejTreeView, _WidgetBase43);

  function ejTreeView(element) {
    _classCallCheck(this, _ejTreeView);

    _WidgetBase43.call(this);
    this.element = element;
  }

  var _ejTreeView = ejTreeView;
  ejTreeView = _aureliaDependencyInjection.inject(Element)(ejTreeView) || ejTreeView;
  ejTreeView = generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'showCheckbox', 'sortSettings', 'template', 'width'])(ejTreeView) || ejTreeView;
  ejTreeView = _aureliaTemplating.customAttribute(constants.attributePrefix + 'tree-view')(ejTreeView) || ejTreeView;
  return ejTreeView;
})(WidgetBase);

exports.ejTreeView = ejTreeView;