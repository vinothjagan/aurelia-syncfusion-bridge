import {Aurelia,inlineView} from 'aurelia-framework';
import {customAttribute,bindable,customElement,children,TemplatingEngine,BindableProperty,HtmlBehaviorResource,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {inject,Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {TaskQueue} from 'aurelia-task-queue';

/**
* Plugin configuration builder
*/
export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll(): EjConfigBuilder {

    this.ejGrid()
      .ejChart()
      .ejBulletGraph()
      .ejCircularGauge()
      .ejLinearGauge()
      .ejDigitalGauge()
      .ejSplitter()
      .ejDatePicker()
      .ejGantt()
      .ejColorPicker()
      .ejDialog()
      .ejScroller()
      .ejBarcode()
      .ejPdfViewer()
      .ejNumericTextbox()
      .ejCurrencyTextbox()
      .ejPercentageTextbox()
      .ejTimePicker()
      .ejToolbar()
      .ejMenu()
      .ejMaskEdit()
      .ejTreeView()
      .ejKanban()
      .ejRibbon()
      .ejRating()
      .ejListBox()
      .ejListView()
      .ejRotator()
      .ejRTE()
      .ejDropDownList()
      .ejRadialMenu()
      .ejTileView()
      .ejAccordion()
      .ejTab()
      .ejCheckBox()
      .ejRadioButton()
      .ejToggleButton()
      .ejDateTimePicker()
      .ejProgressBar()
      .ejTagCloud()
      .ejButton()
      .ejSlider()
      .ejFileExplorer()
      .ejTemplate();
    return this;
  }

  /**
   * Don't globalize any resources
   * Allows you to import wrappers yourself via <require></require>
   */
  withoutGlobalResources(): EjConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  ejGrid(): EjConfigBuilder {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/column');
    return this;
  }

  ejChart(): EjConfigBuilder {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/series');
    return this;
  }

  ejBulletGraph(): EjConfigBuilder {
    this.resources.push('./bulletgraph/bulletgraph');
    this.resources.push('./bulletgraph/qualitativeRange');
    return this;
  }

  ejCircularGauge(): EjConfigBuilder {
    this.resources.push('./circulargauge/circulargauge');
    return this;
  }

  ejLinearGauge(): EjConfigBuilder {
    this.resources.push('./lineargauge/lineargauge');
    return this;
  }

  ejDigitalGauge(): EjConfigBuilder {
    this.resources.push('./digitalgauge/digitalgauge');
    return this;
  }

  ejSplitter(): EjConfigBuilder {
    this.resources.push('./splitter/splitter');
    return this;
  }

  ejDatePicker(): EjConfigBuilder {
    this.resources.push('./datepicker/datepicker');
    return this;
  }

  ejGantt(): EjConfigBuilder {
    this.resources.push('./gantt/gantt');
    return this;
  }

  ejColorPicker(): EjConfigBuilder {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  }

  ejDialog(): EjConfigBuilder {
    this.resources.push('./dialog/dialog');
    return this;
  }

  ejScroller(): EjConfigBuilder {
    this.resources.push('./scroller/scroller');
    return this;
  }

  ejBarcode(): EjConfigBuilder {
    this.resources.push('./barcode/barcode');
    return this;
  }

  ejPdfViewer(): EjConfigBuilder {
    this.resources.push('./pdfviewer/pdfviewer');
    return this;
  }

  ejNumericTextbox(): EjConfigBuilder {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  }

  ejCurrencyTextbox(): EjConfigBuilder {
    this.resources.push('./currencytextbox/currencytextbox');
    return this;
  }

  ejPercentageTextbox(): EjConfigBuilder {
    this.resources.push('./percentagetextbox/percentagetextbox');
    return this;
  }

  ejTimePicker(): EjConfigBuilder {
    this.resources.push('./timepicker/timepicker');
    return this;
  }

  ejToolbar(): EjConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    return this;
  }

  ejMenu(): EjConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }

  ejMaskEdit(): EjConfigBuilder {
    this.resources.push('./maskedit/maskedit');
    return this;
  }

  ejTreeView(): EjConfigBuilder {
    this.resources.push('./treeview/treeview');
    return this;
  }

  ejKanban(): EjConfigBuilder {
    this.resources.push('./kanban/kanban');
    this.resources.push('./kanban/kanbanColumn');
    return this;
  }

  ejRibbon(): EjConfigBuilder {
    this.resources.push('./ribbon/ribbon');
    return this;
  }

  ejRating(): EjConfigBuilder {
    this.resources.push('./rating/rating');
    return this;
  }

  ejListBox(): EjConfigBuilder {
    this.resources.push('./listbox/listbox');
    return this;
  }

  ejListView(): EjConfigBuilder {
    this.resources.push('./listview/listview');
    this.resources.push('./listview/listViewItem');
    return this;
  }

  ejRotator(): EjConfigBuilder {
    this.resources.push('./rotator/rotator');
    return this;
  }

  ejRTE(): EjConfigBuilder {
    this.resources.push('./rte/rte');
    return this;
  }

  ejDropDownList(): EjConfigBuilder {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  }

  ejRadialMenu(): EjConfigBuilder {
    this.resources.push('./radialmenu/radialmenu');
    return this;
  }

  ejTileView(): EjConfigBuilder {
    this.resources.push('./tileview/tileview');
    return this;
  }

  ejAccordion(): EjConfigBuilder {
    this.resources.push('./accordion/accordion');
    return this;
  }

  ejTab(): EjConfigBuilder {
    this.resources.push('./tab/tab');
    return this;
  }

  ejCheckBox(): EjConfigBuilder {
    this.resources.push('./checkbox/checkbox');
    return this;
  }

  ejRadioButton(): EjConfigBuilder {
    this.resources.push('./radiobutton/radiobutton');
    return this;
  }

  ejToggleButton(): EjConfigBuilder {
    this.resources.push('./togglebutton/togglebutton');
    return this;
  }

  ejDateTimePicker(): EjConfigBuilder {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  }

  ejProgressBar(): EjConfigBuilder {
    this.resources.push('./progressbar/progressbar');
    return this;
  }

  ejTagCloud(): EjConfigBuilder {
    this.resources.push('./tagcloud/tagcloud');
    return this;
  }

  ejButton(): EjConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }

  ejSlider(): EjConfigBuilder {
    this.resources.push('./slider/slider');
    return this;
  }

  ejFileExplorer(): EjConfigBuilder {
    this.resources.push('./fileexplorer/fileexplorer');
    return this;
  }

  ejTemplate(): EjConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }
}
export function configure(aurelia: Aurelia, configCallback?: (builder: EjConfigBuilder) => void) {
  let builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

      // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

import 'ej.accordion.min';

@customElement(`${constants.elementPrefix}accordion`)
@inlineView('<template><content></content></template>')

@generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen',
    'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height',
    'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner',
    'width'])
@inject(Element)
export class ejAccordion extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'datavisualization/ej.barcode.min';

@customElement(`${constants.elementPrefix}barcode`)
@inlineView('<template><content></content></template>')

@generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor',
    'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension'])
@inject(Element)
export class ejBarcode extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'datavisualization/ej.bulletgraph.min';

@customElement(`${constants.elementPrefix}bullet-graph`)
@inlineView('<template><content></content></template>')

@generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'flowDirection', 'height', 'isResponsive', 'orientation',
    'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength',
    'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width'])
@inject(Element)
export class ejBulletGraph extends WidgetBase {
    @children(`${constants.elementPrefix}qualitativeRange`) qualitativeRanges
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'qualitativeRanges';
    }
}
@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}qualitative-range`)
@generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke'])

export class QualitativeRange {
}
import 'ej.button.min';

@customAttribute(`${constants.attributePrefix}button`)

@generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition',
    'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text',
    'timeInterval', 'type', 'width'])
@inject(Element)
export class ejButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}



import 'datavisualization/ej.chart.min';

@customElement(`${constants.elementPrefix}chart`)
@inlineView('<template><content></content></template>')

@generateBindables('ejChart', ['annotations', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions',
    'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'enableRotation', 'indicators', 'isResponsive',
    'legend', 'locale', 'palette', 'Margin', 'perspectiveAngle', 'primaryXAxis', 'primaryYAxis', 'rotation', 'rowDefinitions',
    'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming'])
@inject(Element)
export class ejChart extends WidgetBase {
    @children(`${constants.elementPrefix}series`) series
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'series';
    }
}
@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}series`)
@generateBindables('series', ['bearFillColor', 'border', 'bullFillColor', 'dashArray',
	'dataSource', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels',
	'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill',
	'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking',
	'isTransposed', 'labelPosition', 'lineCap', 'lineJoin', 'marker', 'opacity', 'palette', 'pieCoefficient',
	'emptyPointSettings', 'positiveFill', 'connectorLine', 'errorBar', 'points', 'pyramidMode', 'query',
	'startAngle', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName',
	'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'size', 'trendlines', 'highlightSettings', 'selectionSettings'])

export class Series {
}
import 'ej.checkbox.min';

@customAttribute(`${constants.attributePrefix}check-box`)

@generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState',
    'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'])
@inject(Element)
export class ejCheckBox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'datavisualization/ej.circulargauge.min';

@customElement(`${constants.elementPrefix}circular-gauge`)
@inlineView('<template><content></content></template>')

@generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient',
    'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly',
    'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejCircularGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.colorpicker.min';

@customAttribute(`${constants.attributePrefix}color-picker`)

@generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled',
    'enableOpacity', 'htmlAttributes', 'modelType', 'opacityValue', 'palette', 'presetType',
    'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showTooltip', 'toolIcon',
    'tooltipText', 'value'], ['value'])
@inject(Element)
export class ejColorPicker extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
export {customAttribute, bindable, inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor, Util};
export const constants = {
  eventPrefix: 'ej-on-',
  bindablePrefix: 'ej-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-'
};

export function generateBindables(controlName, inputs, twoWayProperties) {
  return function(target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    inputs.push('options');
    let len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (let i = 0; i < len; i++) {
        let option = inputs[i];
        let nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        let prop = new BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}

/**
* To get binded events from the element
* @param element The Element from which events acquired
*/
export function getEventOption(element) {
  let name;
  let attr;
  let attributes = element.attributes;
  let option = {};
  let container = (Container.instance || new Container());
  let util = container.get(Util);
  for (let i = 0, len = attributes.length; i < len; i++) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      continue;
    }
    let actualEventName = name.split('.')[0];//Event name with constants event prefix
    let eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = e => fireEvent(element, actualEventName, e);
  }
  return option;
}
/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

@inject(TemplatingEngine, Util)
export class TemplateProcessor {

  constructor(context, templateEngine) {
    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  initTemplate() {
    let proxy = this;
    ej.template.render = function(self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  }

  initWidgetDependancies() {
    if ( this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    let proxy =  this.context;
    let element =  this.context.widget.element;
    element.on( this.context.widget.pluginName + 'refresh', function() {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  }

  renderStringTemplate(self, selector, data, index) {
    let templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    let scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    let actElement = $(selector).html();
    let tempElement = "<div class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  }

  compileTemplate(element) {
    let templates = $(element).find('.ej-aurelia-template');
    let templateObject =  this.context.widget.aureliaTemplate;
    for (let template in templateObject) {
      let tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (let i = 0; i < tmplElement.length; i++) {
          let view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[i]);
          templateObject[template].views[i] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  }

  clearTempalte() {
    let templateObject =  this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (let t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  }

  unbindViews(obj) {
    for (let i = 0; i < obj.views.length; i++) {
      let view = obj.views[i];
      view.unbind();
    }
  }

}

@customElement(`${constants.elementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  return true;
})
@inject(TargetInstruction)
export class Template {
  @bindable template;
  constructor(target) {
    this.template = target.elementInstruction.template;
  }

}

export class Util {

  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;
    return this._unhyphenate(name);
  }

  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  getOptions(model, properties ) {
    let bindableproperites = {};
    for (let prop of properties) {
      let value = model[this.getBindablePropertyName(prop)];
      if (this.hasValue(value)) {
        if (typeof value === 'string' ) {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  }

  getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  }

  hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
  }

  processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  }
}

let firstValue = {};
export class WidgetBase {
/**
* To Create an widget
* @param option Object which contains  Element in which  widget will be created
*/
  createWidget(option) {
    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions) {
      this.createTwoWays();
    }
    this.widget = jQuery($(option.element))[this.controlName](this.allOption ).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
  }

  createTwoWays() {
    let model = this.allOption;
    let twoWays = this.twoWays;
    let len = twoWays.length;
    for (let i = 0; i < len; i++) {
      let prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  }

  addTwoways(prop) {
    let model = this;
    let value = firstValue;
    return function(newVal, isApp) {
      if (value === firstValue) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
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
      if (!isApp && model.util.hasValue(newVal) ) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
      return null;
    };
  }
/**
* To get property and event options from the element
* @param element Element from which options are acquired
*/
  getWidgetOptions(element) {
    let propOptions;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    let eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  }

  getChildProperties(options) {
    let PropertyName = this.childPropertyName;
    let childCollection = this[PropertyName];
    let len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      let childProperties = childCollection[0].controlProperties;
      for (let i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  }

  attached() {
    this.util = new Util();
    this.createWidget({ element: this.element });
  }
/**
 * To change widget model value
 * @param property The viewModel property name
 * @param newValue New value of the property
 * @param oldvalue Pld value of the property
 */
  propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      let modelValue;
      let prop = this.util.getControlPropertyName(this, property);
      if (prop) {
        if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          let isTwoway = typeof modelValue === 'function';
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
  }
  detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    this.widget.destroy();
  }
}


import 'ej.editor.min';

@customAttribute(`${constants.attributePrefix}currency-textbox`)

@generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator',
    'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue',
    'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage',
    'validationRules', 'value', 'watermarkText', 'width'])
@inject(Element)
export class ejCurrencyTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.datepicker.min';

@customAttribute(`${constants.attributePrefix}date-picker`)

@generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel',
	'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode',
	'fields', 'headerFormat', 'height',
	'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate',
	'readOnly', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip',
	'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage',
	'validationRules', 'value', 'watermarkText', 'width'], ['value'])
@inject(Element)
export class ejDatePicker extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
	}
}
import 'ej.datetimepicker.min';

@customAttribute(`${constants.attributePrefix}date-time-picker`)

@generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat',
	'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL',
	'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale',
	'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton',
	'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown',
	'timePopupWidth', 'validationMessage',
	'validationRules', 'value', 'width'], ['value'])
@inject(Element)
export class ejDateTimePicker extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
	}
}
import 'ej.dialog.min';

@customElement(`${constants.elementPrefix}dialog`)
@inlineView('<template><content></content></template>')

@generateBindables('ejDialog', ['actionButtons', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'closeIconTooltip', 'closeOnEscape', 'containment',
	'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal',
	'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'isResponsive',
	'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position',
	'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip',
	'width', 'zIndex'])
@inject(Element)
export class ejDialog extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
	}
}
import 'datavisualization/ej.digitalgauge.min';

@customElement(`${constants.elementPrefix}digital-gauge`)
@inlineView('<template><content></content></template>')

@generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items',
    'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value'])
@inject(Element)
export class ejDigitalGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.dropdownlist.min';

@customAttribute(`${constants.attributePrefix}drop-down-list`)

@generateBindables('ejDropDownList', ['cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled',
	'enableIncrementalSearch', 'enableFilterSearch', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting',
	'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'maxPopupHeight', 'minPopupHeight',
	'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query',
	'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner',
	'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules',
	'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'])
@inject(Element)
export class ejDropDownList extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
	}
}
import 'ej.fileexplorer.min';

@customElement(`${constants.elementPrefix}file-explorer`)
@inlineView('<template><content></content></template>')

@generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL',
    'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight',
    'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems',
    'showContextMenu', 'showFooter', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList',
    'uploadSettings', 'width'])
@inject(Element)
export class ejFileExplorer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.gantt.min';

@customElement(`${constants.elementPrefix}gantt`)
@inlineView('<template><content></content></template>')

@generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting',
	'enablePredecessorValidation', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'childMapping', 'connectorLineBackground',
	'connectorlineWidth', 'cssClass', 'dataSource', 'dateFormat', 'durationMapping', 'durationUnit',
	'editDialogFields', 'splitterSettings', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableContextMenu',
	'enableProgressBarResizing', 'enableResize', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'endDateMapping',
	'highlightWeekends', 'holidays', 'includeWeekend', 'locale', 'milestoneMapping', 'parentProgressbarBackground',
	'parentTaskbarBackground', 'parentTaskIdMapping', 'predecessorMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate',
	'progressbarTooltipTemplateId', 'progressMapping', 'query', 'renderBaseline', 'resourceIdMapping', 'resourceInfoMapping',
	'resourceNameMapping', 'resources', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings',
	'scheduleStartDate', 'selectedItem', 'selectedRowIndex', 'showColumnChooser',
	'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings',
	'sortSettings', 'splitterPosition', 'startDateMapping',
	'stripLines', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarTooltipTemplate', 'taskbarTooltipTemplateId',
	'taskIdMapping', 'taskNameMapping', 'toolbarSettings', 'treeColumnIndex',
	'weekendBackground', 'workingTimeScale'], ['dataSource', 'selectedRowIndex'])
@inject(Element)
export class ejGantt extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
	}
}
@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}column`)
@generateBindables('columns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing',
    'showInColumnChooser', 'commands', 'cssClass', 'customAttributes',
    'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate',
    'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID',
    'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'isUnbound',
    'template', 'templateID', 'textAlign', 'tooltip', 'clipMode', 'type',
    'validationRules', 'visible', 'width'])

export class Column {
    @children(`${constants.elementPrefix}template`) template
    bind() {
        if (this.template[0]) {
            let util = new Util();
            this[util.getBindablePropertyName('template')] = this.template[0].template;
        }
    }
}
import 'ej.grid.min';

@customElement(`${constants.elementPrefix}grid`)
@inlineView('<template><content></content></template>')

@generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging',
    'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowScrolling', 'allowSearching', 'allowSelection',
    'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout',
    'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow',
    'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL',
    'enableTouch', 'filterSettings', 'groupSettings', 'textWrapSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'scrollSettings',
    'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'showAddNewRow', 'showColumnChooser', 'showInColumnChooser', 'showStackedHeader', 'showSummary',
    'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings'], ['dataSource'])
@inject(Element, TemplatingEngine)
export class ejGrid extends WidgetBase {
    @children(`${constants.elementPrefix}column`) columns
    constructor(element, templateEngine) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
        this.templateProcessor = new TemplateProcessor(this, templateEngine);
        this.templateProcessor.initTemplate();
    }
}
import 'ej.kanban.min';

@customElement(`${constants.elementPrefix}kanban`)
@inlineView('<template><content></content></template>')

@generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowSelection',
    'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'contextMenuSettings', 'columns', 'cardSettings', 'cssClass', 'dataSource', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'locale'], ['dataSource'])
@inject(Element)
export class ejKanban extends WidgetBase {
    @children(`${constants.elementPrefix}kanbanColumn`) columns
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
    }
}
@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}kanban-column`)
@generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible'])

export class KanbanColumn {
}
import 'datavisualization/ej.lineargauge.min';

@customElement(`${constants.elementPrefix}linear-gauge`)
@inlineView('<template><content></content></template>')

@generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame',
    'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly',
    'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum'])
@inject(Element)
export class ejLinearGauge extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.listbox.min';

@customAttribute(`${constants.attributePrefix}list-box`)

@generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices',
    'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL',
    'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit',
    'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template',
    'value', 'virtualScrollMode', 'width', 'targetID'], ['value'])
@inject(Element)
export class ejListBox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}



import 'ej.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@inlineView('<template><content></content></template>')

@generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList',
    'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection',
    'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource'])
@inject(Element)
export class ejListView extends WidgetBase {
    @children(`${constants.elementPrefix}listViewItem`) items
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
    }
}



@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}list-view-item`)
@generateBindables('items', [])

export class ListViewItem {
}
import 'ej.maskedit.min';

@customAttribute(`${constants.attributePrefix}mask-edit`)

@generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes',
    'inputMode', 'maskFormat', 'name', 'readOnly', 'showError', 'showRoundedCorner',
    'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'])
@inject(Element)
export class ejMaskEdit extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)

@generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL',
    'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'menuType', 'openOnClick', 
    'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'])
@inject(Element)
export class ejMenu extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.editor.min';

@customAttribute(`${constants.attributePrefix}numeric-textbox`)

@generateBindables('ejNumericTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator',
    'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue',
    'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage',
    'validationRules', 'value', 'watermarkText', 'width'])
@inject(Element)
export class ejNumericTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.pdfviewer.min';

@customElement(`${constants.elementPrefix}pdf-viewer`)
@inlineView('<template><content></content></template>')

@generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber',
    'zoomPercentage', 'pdfService'])
@inject(Element)
export class ejPdfViewer extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.editor.min';

@customAttribute(`${constants.attributePrefix}percentage-textbox`)

@generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator',
    'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue',
    'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage',
    'validationRules', 'value', 'watermarkText', 'width'])
@inject(Element)
export class ejPercentageTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.progressbar.min';

@customAttribute(`${constants.attributePrefix}progress-bar`)

@generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue',
    'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'])
@inject(Element)
export class ejProgressBar extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.radiobutton.min';

@customAttribute(`${constants.attributePrefix}radio-button`)

@generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id',
    'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'])
@inject(Element)
export class ejRadioButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.radialmenu.min';

@customAttribute(`${constants.attributePrefix}radial-menu`)

@generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'radius', 'targetElementId',
    'position'])
@inject(Element)
export class ejRadialMenu extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.rating.min';

@customAttribute(`${constants.attributePrefix}rating`)

@generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue',
    'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth',
    'showTooltip', 'value', 'width'], ['value'])
@inject(Element)
export class ejRating extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.ribbon.min';

@customElement(`${constants.elementPrefix}ribbon`)
@inlineView('<template><content></content></template>')

@generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'expandPinSettings',
    'applicationTab', 'contextualTabs',
    'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex',
    'tabs', 'locale', 'width'])
@inject(Element)
export class ejRibbon extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.rotator.min';

@customElement(`${constants.elementPrefix}rotator`)
@inlineView('<template><content></content></template>')

@generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay',
    'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace',
    'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption',
    'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth',
    'startIndex', 'stopOnHover', 'thumbnailSourceID'])
@inject(Element)
export class ejRotator extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.rte.min';

@customAttribute(`${constants.attributePrefix}r-t-e`)

@generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows',
	'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL',
	'enableXHTML', 'enableTabKeyNavigation', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes',
	'iframeAttributes', 'imageBrowser', 'isResponsive',
	'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth',
	'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions',
	'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount',
	'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width',
	'zoomStep'], ['value'])
@inject(Element)
export class ejRTE extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
	}
}
import 'common/ej.scroller.min';

@customElement(`${constants.elementPrefix}scroller`)
@inlineView('<template><content></content></template>')

@generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height',
    'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'])
@inject(Element)
export class ejScroller extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.slider.min';

@customAttribute(`${constants.attributePrefix}slider`)

@generateBindables('ejSlider', ['animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height',
    'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation',
    'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType',
    'smallStep', 'value', 'values', 'width'], ['value'])
@inject(Element)
export class ejSlider extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.splitter.min';

@customElement(`${constants.elementPrefix}splitter`)
@inlineView('<template><content></content></template>')

@generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes',
    'isResponsive', 'orientation', 'properties', 'width'])
@inject(Element)
export class ejSplitter extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.tab.min';

@customElement(`${constants.elementPrefix}tab`)
@inlineView('<template><content></content></template>')

@generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled',
    'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition',
    'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix',
    'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'])
@inject(Element)
export class ejTab extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.tagcloud.min';

@customElement(`${constants.elementPrefix}tag-cloud`)
@inlineView('<template><content></content></template>')

@generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle',
    'titleImage', 'titleText'])
@inject(Element)
export class ejTagCloud extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.tile.min';

@customElement(`${constants.elementPrefix}tile-view`)
@inlineView('<template><content></content></template>')

@generateBindables('ejTileView', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId',
    'imageUrl', 'livetile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])
@inject(Element)
export class ejTileView extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.timepicker.min';

@customAttribute(`${constants.attributePrefix}time-picker`)

@generateBindables('ejTimePicker', ['cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height',
    'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime',
    'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton',
    'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'])
@inject(Element)
export class ejTimePicker extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.togglebutton.min';

@customAttribute(`${constants.attributePrefix}toggle-button`)

@generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon',
    'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes',
    'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type',
    'width'])
@inject(Element)
export class ejToggleButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.toolbar.min';

@customAttribute(`${constants.attributePrefix}toolbar`)

@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query',
    'showRoundedCorner', 'width'])
@inject(Element)
export class ejToolbar extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}
import 'ej.treeview.min';

@customAttribute(`${constants.attributePrefix}tree-view`)

@generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck',
    'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand',
    'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand',
    'selectedNode', 'showCheckbox', 'sortSettings', 'template',
    'width'])
@inject(Element)
export class ejTreeView extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}