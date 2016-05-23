import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.autocomplete.min';

@customAttribute(`${constants.attributePrefix}autocomplete`)
@generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'minCharacter', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejAutocomplete extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

