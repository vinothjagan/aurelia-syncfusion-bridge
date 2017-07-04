import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {inlineView, customElement, children} from '../common/common';
import {Util} from '../common/util';

@inlineView(`${constants.aureliaTemplateString}`)
@customElement(`${constants.elementPrefix}tree-grid-column`)
@generateBindables('columns', ['allowFiltering', 'allowFilteringBlankContent', 'allowSorting', 'allowCellSelection', 'editParams', 'editType', 'dropdownData', 'field', 'template', 'templateID', 'angularTemplate', 'filterEditType', 'headerText', 'displayAsCheckbox', 'showCheckbox', 'visible', 'width', 'headerTemplateID', 'format', 'isTemplateColumn', 'headerTextAlign', 'isFrozen', 'textAlign', 'allowEditing', 'showInColumnChooser', 'clipMode', 'tooltip', 'headerTooltip', 'validationRules', 'allowFreezing'])

export class TreeGridColumn {
  @children(`${constants.elementPrefix}template`) angularTemplate = [];
  setTemplates() {
    if (this.angularTemplate[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
    }
  }
}

