import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {WidgetBase} from '../common/widgetBase';
import {Util} from '../common/util';
import 'ej.button.min';

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition',
'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'])

@inject(Element, Util)
export class ejButton extends WidgetBase {
  constructor(element, util) {
    super();
    this.element = element;
    this.util = util;
  }
}
