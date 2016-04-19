import {getEventOption} from './events';
import {TaskQueue} from 'aurelia-task-queue';
let firstValue = {};
export class WidgetBase {

/**
* To Create an widget
* @param option Object which contains  Element in which  widget will be created
*/

  createWidget(option) {
    this.allOption = this.getWidgetOptions(option.element);
    this.createTwoWays();
    this.widget = jQuery($(option.element))[this.controlName](this.allOption ).data(this.controlName);
  }

  createTwoWays() {
    let model = this.allOption;
    let twoWays = this.twoWays;
    let len = twoWays.length;
    for (let i = 0; i < len; i++) {
      let prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  }

  addTwoways(prop) {
    let model = this;
    let value = firstValue;
    return function(newVal, isApp) {
      if(value === firstValue) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if(value === newVal) {
        return;
      }
      value = newVal;
      if(!isApp && model.util.hasValue(newVal) ) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
    };
  }
/**
* To get property and event options from the element
* @param element Element from which options are acquired
*/
  getWidgetOptions(element) {
    let propOptions = this.util.getOptions(this);
    let eventOption = getEventOption(element);
    return Object.assign({}, propOptions, eventOption);
  }

  attached() {
    this.createWidget({ element: this.element });
  }
/**
 * To change widget model value
 * @param property The viewModel property name
 * @param newValue New value of the property
 * @param oldvalue Pld value of the property
 */
  propertyChanged(property, newValue, oldValue) {
    if(this.widget) {
      let modelValue;
      let prop = this.util.getControlPropertyName(this, property);
      if(prop) {
        modelValue = this.widget.model[prop];
        let isTwoway = typeof modelValue === 'function';
        if(isTwoway) {
          modelValue = modelValue();
        }
        if (modelValue !== newValue) {
          if(isTwoway) {
            newValue = this.addTwoways(prop);
          }
          this.widget.option(prop, newValue);
        }
      }
    }
  }
  detached() {
    this.widget.destroy();
  }
}
