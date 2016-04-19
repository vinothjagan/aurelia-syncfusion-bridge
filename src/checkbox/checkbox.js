import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {WidgetBase} from '../common/widget-base';
import {Util} from '../common/util';
import 'ej.checkbox.min';

@customAttribute(`${constants.attributePrefix}checkbox`)
@generateBindables('ejCheckBox', ['checked', 'checkstate', 'enabled', 'cssClass', 'enablePersistence', 'enableRTL',
 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage',
  'validationRules', 'value' ], ['checked'])
@inject(Element, Util)
export class ejCheckBox extends WidgetBase {
  constructor(element, util) {
    super();
    this.element = element;
    this.util = util;
  }
}
