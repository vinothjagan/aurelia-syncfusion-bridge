/**
* Plugin configuration builder
*/
export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll() : EjConfigBuilder {
    this.ejGrid()
    .ejChart()
    .ejMap()
    .ejRangeNavigator()
    .ejDiagram()
    .ejHeatMap()
    .ejHeatMapLegend()
    .ejOverview()
    .ejPager()
    .ejBulletGraph()
    .ejCircularGauge()
    .ejLinearGauge()
    .ejDigitalGauge()
    .ejDatePicker()
    .ejGantt()
    .ejColorPicker()
    .ejDialog()
    .ejBarcode()
    .ejPdfViewer()
    .ejMenu()
    .ejMaskEdit()
    .ejKanban()
    .ejRating()
    .ejListBox()
    .ejListView()
    .ejNavigationDrawer()
    .ejDropDownList()
    .ejAutocomplete()
    .ejRadialMenu()
    .ejRadialSlider()
    .ejAccordion()
    .ejCheckBox()
    .ejRadioButton()
    .ejGroupButton()
    .ejDateTimePicker()
    .ejProgressBar()
    .ejButton()
    .ejFileExplorer()
    .ejPivotGrid()
    .ejPivotChart()
    .ejPivotGauge()
    .ejPivotSchemaDesigner()
    .ejPivotTreeMap()
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
  ejMap(): EjConfigBuilder {
    this.resources.push('./map/map');
    this.resources.push('./map/layer');
    return this;
  }
  ejRangeNavigator(): EjConfigBuilder {
    this.resources.push('./rangenavigator/rangenavigator');
    this.resources.push('./rangenavigator/rangeseries');
    return this;
  }
  ejDiagram(): EjConfigBuilder {
    this.resources.push('./diagram/diagram');
    return this;
  }
  ejHeatMap(): EjConfigBuilder {
    this.resources.push('./heatmap/heatmap');
    return this;
  }
  ejHeatMapLegend(): EjConfigBuilder {
    this.resources.push('./heatmaplegend/heatmaplegend');
    return this;
  }
  ejOverview(): EjConfigBuilder {
    this.resources.push('./overview/overview');
    return this;
  }
  ejPager(): EjConfigBuilder {
    this.resources.push('./pager/pager');
    return this;
  }
  ejBulletGraph(): EjConfigBuilder {
    this.resources.push('./bulletgraph/bulletgraph');
    this.resources.push('./bulletgraph/qualitativerange');
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
  ejBarcode(): EjConfigBuilder {
    this.resources.push('./barcode/barcode');
    return this;
  }
  ejPdfViewer(): EjConfigBuilder {
    this.resources.push('./pdfviewer/pdfviewer');
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
  ejKanban(): EjConfigBuilder {
    this.resources.push('./kanban/kanban');
    this.resources.push('./kanban/kanbancolumn');
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
    return this;
  }
  ejNavigationDrawer(): EjConfigBuilder {
    this.resources.push('./navigationdrawer/navigationdrawer');
    return this;
  }
  ejDropDownList(): EjConfigBuilder {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  }
  ejAutocomplete(): EjConfigBuilder {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  }
  ejRadialMenu(): EjConfigBuilder {
    this.resources.push('./radialmenu/radialmenu');
    this.resources.push('./radialmenu/item');
    return this;
  }
  ejRadialSlider(): EjConfigBuilder {
    this.resources.push('./radialslider/radialslider');
    return this;
  }
  ejAccordion(): EjConfigBuilder {
    this.resources.push('./accordion/accordion');
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
  ejGroupButton(): EjConfigBuilder {
    this.resources.push('./groupbutton/groupbutton');
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
  ejButton(): EjConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }
  ejFileExplorer(): EjConfigBuilder {
    this.resources.push('./fileexplorer/fileexplorer');
    return this;
  }
  ejPivotGrid(): EjConfigBuilder {
    this.resources.push('./pivotgrid/pivotgrid');
    return this;
  }
  ejPivotChart(): EjConfigBuilder {
    this.resources.push('./pivotchart/pivotchart');
    return this;
  }
  ejPivotGauge(): EjConfigBuilder {
    this.resources.push('./pivotgauge/pivotgauge');
    return this;
  }
  ejPivotSchemaDesigner(): EjConfigBuilder {
    this.resources.push('./pivotschemadesigner/pivotschemadesigner');
    return this;
  }
  ejPivotTreeMap(): EjConfigBuilder {
    this.resources.push('./pivottreemap/pivottreemap');
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }
}

