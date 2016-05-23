import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.navigationdrawer.min';

@customElement(`${constants.elementPrefix}navigation-drawer`)
@inlineView('<template><content></content></template>')
@generateBindables('ejNavigationDrawer', ['contentid', 'cssclass', 'direction', 'enablelistview', 'items', 'listviewsettings', 'position', 'targetid', 'type', 'width'])
@inject(Element)
export class ejNavigationDrawer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

