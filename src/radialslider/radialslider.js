import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.radialslider.min';

@customAttribute(`${constants.attributePrefix}radial-slider`)
@generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'radius', 'strokeWidth'])
@inject(Element)
export class ejRadialSlider extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

