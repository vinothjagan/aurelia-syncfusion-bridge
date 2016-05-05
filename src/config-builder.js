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