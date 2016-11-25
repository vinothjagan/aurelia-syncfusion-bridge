import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customAttribute, inject} from '../common/common';

import 'ej.checkbox.min';

@customAttribute(`${constants.attributePrefix}check-box`)
@generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejCheckBox extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

