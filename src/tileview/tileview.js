import {customElement, inlineView, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.tile.min';

@customElement(`${constants.elementPrefix}tile-view`)
@inlineView('<template><content></content></template>')

@generateBindables('ejTileView', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId',
    'imageUrl', 'livetile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor'])
@inject(Element)
export class ejTileView extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}