import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor} from '../common/common';

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