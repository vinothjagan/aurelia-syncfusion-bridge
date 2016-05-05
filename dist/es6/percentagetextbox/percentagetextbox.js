import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.editor.min';

@customAttribute(`${constants.attributePrefix}percentage-textbox`)

@generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSeparator',
    'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue',
    'name', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage',
    'validationRules', 'value', 'watermarkText', 'width'])
@inject(Element)
export class ejPercentageTextbox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}