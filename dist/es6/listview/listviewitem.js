import {inlineView, customElement, children, constants, generateBindables, Util} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}list-view-item`)
@generateBindables('items', [])

export class ListViewItem {
}