import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.rotator.min';

@customElement(`${constants.elementPrefix}rotator`)
@inlineView('<template><content></content></template>')

@generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay',
    'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace',
    'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption',
    'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth',
    'startIndex', 'stopOnHover', 'thumbnailSourceID'])
@inject(Element)
export class ejRotator extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}