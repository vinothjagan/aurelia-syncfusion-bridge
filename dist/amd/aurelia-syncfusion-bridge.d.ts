declare module 'aurelia-syncfusion-bridge' {
  import { Aurelia, inlineView }  from 'aurelia-framework';
  import { customAttribute, bindable, customElement, children, TemplatingEngine, BindableProperty, HtmlBehaviorResource, noView, processContent, TargetInstruction }  from 'aurelia-templating';
  import { inject, Container }  from 'aurelia-dependency-injection';
  import { metadata }  from 'aurelia-metadata';
  import { TaskQueue }  from 'aurelia-task-queue';
  import 'ej.accordion.min';
  import 'datavisualization/ej.barcode.min';
  import 'datavisualization/ej.bulletgraph.min';
  import 'ej.button.min';
  import 'datavisualization/ej.chart.min';
  import 'ej.checkbox.min';
  import 'datavisualization/ej.circulargauge.min';
  import 'ej.colorpicker.min';
  import 'ej.editor.min';
  import 'ej.datepicker.min';
  import 'ej.datetimepicker.min';
  import 'ej.dialog.min';
  import 'datavisualization/ej.digitalgauge.min';
  import 'ej.dropdownlist.min';
  import 'ej.fileexplorer.min';
  import 'ej.gantt.min';
  import 'ej.grid.min';
  import 'ej.kanban.min';
  import 'datavisualization/ej.lineargauge.min';
  import 'ej.listbox.min';
  import 'ej.listview.min';
  import 'ej.maskedit.min';
  import 'ej.menu.min';
  import 'ej.editor.min';
  import 'ej.pdfviewer.min';
  import 'ej.editor.min';
  import 'ej.progressbar.min';
  import 'ej.radiobutton.min';
  import 'ej.radialmenu.min';
  import 'ej.rating.min';
  import 'ej.ribbon.min';
  import 'ej.rotator.min';
  import 'ej.rte.min';
  import 'common/ej.scroller.min';
  import 'ej.slider.min';
  import 'ej.splitter.min';
  import 'ej.tab.min';
  import 'ej.tagcloud.min';
  import 'ej.tile.min';
  import 'ej.timepicker.min';
  import 'ej.togglebutton.min';
  import 'ej.toolbar.min';
  import 'ej.treeview.min';
  
  /**
  * Plugin configuration builder
  */
  export class EjConfigBuilder {
    resources: string[];
    useGlobalResources: boolean;
    
    /**
      * Globally register all EJ wrappers including templating support
      */
    useAll(): EjConfigBuilder;
    
    /**
       * Don't globalize any resources
       * Allows you to import wrappers yourself via <require></require>
       */
    withoutGlobalResources(): EjConfigBuilder;
    ejGrid(): EjConfigBuilder;
    ejChart(): EjConfigBuilder;
    ejBulletGraph(): EjConfigBuilder;
    ejCircularGauge(): EjConfigBuilder;
    ejLinearGauge(): EjConfigBuilder;
    ejDigitalGauge(): EjConfigBuilder;
    ejSplitter(): EjConfigBuilder;
    ejDatePicker(): EjConfigBuilder;
    ejGantt(): EjConfigBuilder;
    ejColorPicker(): EjConfigBuilder;
    ejDialog(): EjConfigBuilder;
    ejScroller(): EjConfigBuilder;
    ejBarcode(): EjConfigBuilder;
    ejPdfViewer(): EjConfigBuilder;
    ejNumericTextbox(): EjConfigBuilder;
    ejCurrencyTextbox(): EjConfigBuilder;
    ejPercentageTextbox(): EjConfigBuilder;
    ejTimePicker(): EjConfigBuilder;
    ejToolbar(): EjConfigBuilder;
    ejMenu(): EjConfigBuilder;
    ejMaskEdit(): EjConfigBuilder;
    ejTreeView(): EjConfigBuilder;
    ejKanban(): EjConfigBuilder;
    ejRibbon(): EjConfigBuilder;
    ejRating(): EjConfigBuilder;
    ejListBox(): EjConfigBuilder;
    ejListView(): EjConfigBuilder;
    ejRotator(): EjConfigBuilder;
    ejRTE(): EjConfigBuilder;
    ejDropDownList(): EjConfigBuilder;
    ejRadialMenu(): EjConfigBuilder;
    ejTileView(): EjConfigBuilder;
    ejAccordion(): EjConfigBuilder;
    ejTab(): EjConfigBuilder;
    ejCheckBox(): EjConfigBuilder;
    ejRadioButton(): EjConfigBuilder;
    ejToggleButton(): EjConfigBuilder;
    ejDateTimePicker(): EjConfigBuilder;
    ejProgressBar(): EjConfigBuilder;
    ejTagCloud(): EjConfigBuilder;
    ejButton(): EjConfigBuilder;
    ejSlider(): EjConfigBuilder;
    ejFileExplorer(): EjConfigBuilder;
    ejTemplate(): EjConfigBuilder;
  }
  export function configure(aurelia: Aurelia, configCallback?: ((builder: EjConfigBuilder) => void)): any;
  export class ejAccordion extends WidgetBase {
    constructor(element: any);
  }
  export class ejBarcode extends WidgetBase {
    constructor(element: any);
  }
  export class ejBulletGraph extends WidgetBase {
    qualitativeRanges: any;
    constructor(element: any);
  }
  export class QualitativeRange {
  }
  export class ejButton extends WidgetBase {
    constructor(element: any);
  }
  export class ejChart extends WidgetBase {
    series: any;
    constructor(element: any);
  }
  export class Series {
  }
  export class ejCheckBox extends WidgetBase {
    constructor(element: any);
  }
  export class ejCircularGauge extends WidgetBase {
    constructor(element: any);
  }
  export class ejColorPicker extends WidgetBase {
    constructor(element: any);
  }
  export const constants: any;
  export function generateBindables(controlName: any, inputs: any, twoWayProperties: any): any;
  
  /**
  * To get binded events from the element
  * @param element The Element from which events acquired
  */
  export function getEventOption(element: any): any;
  
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  export function fireEvent(element: Element, name: string, data?: any): any;
  export class TemplateProcessor {
    constructor(context: any, templateEngine: any);
    initTemplate(): any;
    initWidgetDependancies(): any;
    renderStringTemplate(self: any, selector: any, data: any, index: any): any;
    compileTemplate(element: any): any;
    clearTempalte(): any;
    unbindViews(obj: any): any;
  }
  export class Template {
    template: any;
    constructor(target: any);
  }
  export class Util {
    getBindablePropertyName(propertyName: string): string;
    getOptions(model: any, properties: any): any;
    getControlPropertyName(options: any, propertyName: any): any;
    hasValue(prop: any): any;
    processData(value: any): any;
  }
  export class WidgetBase {
    
    /**
    * To Create an widget
    * @param option Object which contains  Element in which  widget will be created
    */
    createWidget(option: any): any;
    createTwoWays(): any;
    addTwoways(prop: any): any;
    
    /**
    * To get property and event options from the element
    * @param element Element from which options are acquired
    */
    getWidgetOptions(element: any): any;
    getChildProperties(options: any): any;
    attached(): any;
    
    /**
     * To change widget model value
     * @param property The viewModel property name
     * @param newValue New value of the property
     * @param oldvalue Pld value of the property
     */
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class ejCurrencyTextbox extends WidgetBase {
    constructor(element: any);
  }
  export class ejDatePicker extends WidgetBase {
    constructor(element: any);
  }
  export class ejDateTimePicker extends WidgetBase {
    constructor(element: any);
  }
  export class ejDialog extends WidgetBase {
    constructor(element: any);
  }
  export class ejDigitalGauge extends WidgetBase {
    constructor(element: any);
  }
  export class ejDropDownList extends WidgetBase {
    constructor(element: any);
  }
  export class ejFileExplorer extends WidgetBase {
    constructor(element: any);
  }
  export class ejGantt extends WidgetBase {
    constructor(element: any);
  }
  export class Column {
    template: any;
    bind(): any;
  }
  export class ejGrid extends WidgetBase {
    columns: any;
    constructor(element: any, templateEngine: any);
  }
  export class ejKanban extends WidgetBase {
    columns: any;
    constructor(element: any);
  }
  export class KanbanColumn {
  }
  export class ejLinearGauge extends WidgetBase {
    constructor(element: any);
  }
  export class ejListBox extends WidgetBase {
    constructor(element: any);
  }
  export class ejListView extends WidgetBase {
    items: any;
    constructor(element: any);
  }
  export class ListViewItem {
  }
  export class ejMaskEdit extends WidgetBase {
    constructor(element: any);
  }
  export class ejMenu extends WidgetBase {
    constructor(element: any);
  }
  export class ejNumericTextbox extends WidgetBase {
    constructor(element: any);
  }
  export class ejPdfViewer extends WidgetBase {
    constructor(element: any);
  }
  export class ejPercentageTextbox extends WidgetBase {
    constructor(element: any);
  }
  export class ejProgressBar extends WidgetBase {
    constructor(element: any);
  }
  export class ejRadioButton extends WidgetBase {
    constructor(element: any);
  }
  export class ejRadialMenu extends WidgetBase {
    constructor(element: any);
  }
  export class ejRating extends WidgetBase {
    constructor(element: any);
  }
  export class ejRibbon extends WidgetBase {
    constructor(element: any);
  }
  export class ejRotator extends WidgetBase {
    constructor(element: any);
  }
  export class ejRTE extends WidgetBase {
    constructor(element: any);
  }
  export class ejScroller extends WidgetBase {
    constructor(element: any);
  }
  export class ejSlider extends WidgetBase {
    constructor(element: any);
  }
  export class ejSplitter extends WidgetBase {
    constructor(element: any);
  }
  export class ejTab extends WidgetBase {
    constructor(element: any);
  }
  export class ejTagCloud extends WidgetBase {
    constructor(element: any);
  }
  export class ejTileView extends WidgetBase {
    constructor(element: any);
  }
  export class ejTimePicker extends WidgetBase {
    constructor(element: any);
  }
  export class ejToggleButton extends WidgetBase {
    constructor(element: any);
  }
  export class ejToolbar extends WidgetBase {
    constructor(element: any);
  }
  export class ejTreeView extends WidgetBase {
    constructor(element: any);
  }
}