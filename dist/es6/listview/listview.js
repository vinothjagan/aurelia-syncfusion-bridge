import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children} from '../common/common';

import 'ej.listview.min';

@customElement(`${constants.elementPrefix}list-view`)
@inlineView('<template><content></content></template>')

@generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList',
    'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection',
    'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource'])
@inject(Element)
export class ejListView extends WidgetBase {
    @children(`${constants.elementPrefix}listViewItem`) items
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'items';
    }
}


