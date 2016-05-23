import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'common/ej.scroller.min';

@customElement(`${constants.elementPrefix}scroller`)
@inlineView('<template><content></content></template>')
@generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejScroller extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

