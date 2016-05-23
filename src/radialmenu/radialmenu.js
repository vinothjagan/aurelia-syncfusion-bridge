import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.radialmenu.min';

@customAttribute(`${constants.attributePrefix}radial-menu`)
@generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'radius', 'targetElementId', 'position'])
@inject(Element)
export class ejRadialMenu extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

