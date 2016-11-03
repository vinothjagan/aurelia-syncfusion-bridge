import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.pager.min';

@customElement(`${constants.elementPrefix}pager`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejPager', ['customText', 'currentPage', 'enableExternalMessage', 'enableQueryString', 'enableRTL', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'totalPages', 'totalRecordsCount', 'showPageInfo'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejPager extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

