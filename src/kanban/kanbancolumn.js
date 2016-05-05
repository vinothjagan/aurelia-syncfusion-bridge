import {inlineView, customElement, children, constants, generateBindables, Util} from '../common/common';

@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}kanban-column`)
@generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible'])

export class KanbanColumn {
}