import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {WidgetBase} from '../common/widgetBase';
import {Util} from '../common/util';
import 'ej.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('ejMenu', ['height', 'width', 'animationType', 'orientation', 'menuType', 'contextMenuTarget', 'htmlAttributes', 'cssClass',
    'openOnClick', 'subMenuDirection', 'enableCenterAlign', 'showRootLevelArrows', 'showSubLevelArrows', 'enableAnimation', 'enableSeparator', 'enabled', 'fields', 'enableRTL',
    'titleText', 'excludeTarget'])

@inject(Element, Util)
export class ejMenu extends WidgetBase {
    constructor(element, util) {
        super();
        this.element = element;
        this.util = util;
    }
}
