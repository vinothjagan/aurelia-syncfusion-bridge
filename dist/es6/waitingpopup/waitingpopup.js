import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.waitingpopup.min';

@customElement(`${constants.elementPrefix}waiting-popup`)
@inlineView('<template><content></content></template>')
@generateBindables('ejWaitingPopup', ['cssClass', 'showImage', 'showOnInit', 'template', 'text'])
@inject(Element)
export class ejWaitingPopup extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

