import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pivotschemadesigner.min';

@customElement(`${constants.elementPrefix}pivot-schema-designer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'olap', 'enableDragDrop', 'height', 'locale', 'pivotControl', 'serviceMethod', 'url', 'width', 'layout'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPivotSchemaDesigner extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

